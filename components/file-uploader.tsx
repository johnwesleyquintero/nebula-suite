"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, File, AlertCircle } from "lucide-react"
import { processFile, MAX_FILE_SIZE } from "@/lib/file-processor"
import { setSecureItemAsync } from "@/lib/secure-storage"
import { captureError } from "@/lib/error-logger"
import { showToast } from "@/components/toast-utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { DataMappingInterface } from "./data-mapping/DataMappingInterface"
import type { FieldMapping } from "@/lib/data-processing/transform"
import { transformData } from "@/lib/data-processing/transform"

// Define the type for ParseResult if it's not already defined elsewhere
interface ParseResult {
  data: any[]
  warnings?: string[]
}

const MAX_LOCAL_STORAGE_SIZE = 5 * 1024 * 1024 // 5MB limit

const storeProcessedData = async (data: any) => {
  try {
    // Store in secure storage using the async version
    await setSecureItemAsync("uploadedData", data)

    // Set flags for data availability
    sessionStorage.setItem("hasUploadedData", "true")
    sessionStorage.removeItem("mappingComplete") // Reset mapping status for new data

    return true
  } catch (error) {
    captureError(error instanceof Error ? error : new Error(String(error)))
    throw error
  }
}

export function FileUploader() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)
  const [uploadedData, setUploadedData] = useState<any[] | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    setIsUploading(true)
    setUploadProgress(0)
    setError(null)

    try {
      // Process each file
      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i]

        // Update progress
        setUploadProgress(Math.round((i / acceptedFiles.length) * 50))

        // Process the file
        const result = await processFile(file)

        if (result) {
          // Store raw data for mapping
          setUploadedData(result.data)

          // Add to uploaded files
          setUploadedFiles((prev) => [...prev, file])
        }

        // Update progress
        setUploadProgress(Math.round(((i + 1) / acceptedFiles.length) * 100))
      }

      showToast("success", "Files uploaded successfully", {
        description: `Processed ${acceptedFiles.length} file(s)`,
      })
    } catch (err) {
      captureError(err instanceof Error ? err : new Error(String(err)))
      setError(err instanceof Error ? err.message : "Failed to upload files")
      showToast("error", "Upload failed", {
        description: err instanceof Error ? err.message : "An unexpected error occurred",
      })
    } finally {
      setIsUploading(false)
    }
  }, [])

  const handleMappingComplete = async (mappings: FieldMapping[]) => {
    if (!uploadedData) return

    try {
      // Transform data with mappings
      const transformedData = transformData(uploadedData, mappings, {
        batchId: new Date().toISOString(),
        source: uploadedFiles[0]?.name || "upload",
      })

      // Store processed data
      await setSecureItemAsync("processedData", transformedData)

      // Set flags for data availability
      sessionStorage.setItem("hasProcessedData", "true")

      showToast("success", "Data mapping complete", {
        description: "Your data has been processed and is ready for analysis",
      })
    } catch (err) {
      captureError(err instanceof Error ? err : new Error(String(err)))
      showToast("error", "Processing failed", {
        description: err instanceof Error ? err.message : "Failed to process data",
      })
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  })

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!uploadedData ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4">
            <Upload className="h-10 w-10 text-muted-foreground" />
            <div>
              <p className="text-lg font-medium">Drag & drop files here</p>
              <p className="text-sm text-muted-foreground">or click to browse (CSV, Excel)</p>
            </div>
            <Button disabled={isUploading}>{isUploading ? "Uploading..." : "Select Files"}</Button>
          </div>
        </div>
      ) : (
        <DataMappingInterface data={uploadedData} onMappingComplete={handleMappingComplete} />
      )}

      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} />
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Uploaded Files</p>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center p-2 border rounded-md">
                <File className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{file.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

