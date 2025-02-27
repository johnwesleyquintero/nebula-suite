"use client"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Check, AlertCircle, Upload } from "lucide-react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { getSecureItemAsync } from "@/lib/secure-storage"
import { useQuery } from "@tanstack/react-query"
import { captureError } from "@/lib/error-logger"
import { ErrorBoundary } from "@/components/error-boundary"
import { useFieldMapping } from "@/lib/hooks/use-field-mapping"
import { type FieldType, fieldValidators } from "@/lib/data-validation"
import { LoadingState } from "@/components/loading-state"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DataMapper() {
  const router = useRouter()

  // Fetch uploaded data from secure storage with proper error handling
  const {
    data: uploadedData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["uploadedData"],
    queryFn: async () => {
      try {
        // First check sessionStorage for quick validation
        const hasData = sessionStorage.getItem("hasUploadedData")
        if (!hasData) {
          return null
        }

        // Get from secure storage using the async version
        const data = await getSecureItemAsync<any>("uploadedData")
        if (!data || !data.data || data.data.length === 0) {
          return null
        }

        return data
      } catch (err) {
        captureError(err instanceof Error ? err : new Error(String(err)))
        throw new Error("Could not retrieve uploaded data")
      }
    },
    retry: 1, // Only retry once
    retryDelay: 1000,
  })

  // Use our custom hook for field mapping
  const {
    mappings,
    validationProgress,
    isValidating,
    isSaving,
    handleMappingChange,
    validateAllMappings,
    resetMappings,
  } = useFieldMapping(uploadedData)

  // Handle successful validation
  const handleSaveMappings = async () => {
    const success = await validateAllMappings()
    if (success) {
      router.push("/export")
    }
  }

  if (isLoading) {
    return <LoadingState text="Loading your data..." className="p-8" />
  }

  // If no data is available, show a helpful message with actions
  if (!uploadedData || error) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>No Data Available</CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : "Please upload your data files before proceeding with mapping."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Action Required</AlertTitle>
            <AlertDescription>You need to upload your data files first before you can map the fields.</AlertDescription>
          </Alert>

          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <Upload className="h-12 w-12 text-muted-foreground" />
            <div className="space-y-2">
              <h3 className="font-medium">Upload Your Data</h3>
              <p className="text-sm text-muted-foreground">
                Start by uploading your CSV or Excel files to begin the mapping process.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/upload">Go to Upload</Link>
              </Button>
              <Button variant="outline" onClick={() => refetch()}>
                Retry Loading
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Check if we have actual data to map
  if (!uploadedData.data || uploadedData.data.length === 0) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Invalid Data</AlertTitle>
        <AlertDescription>
          The uploaded file appears to be empty or invalid. Please upload a valid file with data.
          <div className="mt-4">
            <Button asChild variant="outline">
              <Link href="/upload">Return to Upload</Link>
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <ErrorBoundary errorBoundaryName="data-mapper">
      <div className="space-y-6">
        {/* Mapping UI */}
        <div className="space-y-4">
          {Object.keys(uploadedData.data[0]).map((sourceField) => (
            <div key={sourceField} className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-3">
                <div className="p-2 border rounded-md">
                  <div className="font-medium text-sm">{sourceField}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Sample: {String(uploadedData.data[0][sourceField])}
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex justify-center">
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="col-span-2">
                <Select
                  value={mappings.find((m) => m.sourceField === sourceField)?.targetField}
                  onValueChange={(value) => handleMappingChange(sourceField, value as FieldType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(fieldValidators).map((field) => (
                      <SelectItem key={field} value={field}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1">
                {mappings.find((m) => m.sourceField === sourceField)?.isValid ? (
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-xs">Valid</span>
                  </div>
                ) : mappings.some((m) => m.sourceField === sourceField) ? (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span className="text-xs">Invalid</span>
                  </div>
                ) : (
                  <span className="text-xs text-muted-foreground">Not mapped</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Validation Progress */}
        {validationProgress > 0 && validationProgress < 100 && (
          <div className="space-y-2">
            <div className="text-sm">Validating mappings...</div>
            <Progress value={validationProgress} />
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={resetMappings} disabled={mappings.length === 0 || isValidating}>
            Reset Mappings
          </Button>
          <Button onClick={handleSaveMappings} disabled={mappings.length === 0 || isValidating || isSaving}>
            {isSaving ? "Saving..." : "Save & Continue"}
          </Button>
        </div>
      </div>
    </ErrorBoundary>
  )
}

