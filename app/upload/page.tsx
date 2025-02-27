import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploader } from "@/components/file-uploader"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upload Data",
  description: "Upload your Amazon seller reports to analyze and process your data",
}

export default function UploadPage() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Upload Data</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload Your Amazon Reports</CardTitle>
          <CardDescription>
            Upload your Amazon seller reports to analyze and process your data. We support CSV, Excel, and Google Sheets
            formats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="file-upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="file-upload">File Upload</TabsTrigger>
              <TabsTrigger value="google-sheets">Google Sheets</TabsTrigger>
              <TabsTrigger value="amazon-api">Amazon API</TabsTrigger>
            </TabsList>
            <TabsContent value="file-upload" className="pt-4">
              <FileUploader />
            </TabsContent>
            <TabsContent value="google-sheets" className="pt-4">
              <div className="flex flex-col items-center justify-center p-8 border border-dashed rounded-lg">
                <p className="text-muted-foreground text-center mb-4">
                  Connect to your Google Sheets to import data directly.
                </p>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </TabsContent>
            <TabsContent value="amazon-api" className="pt-4">
              <div className="flex flex-col items-center justify-center p-8 border border-dashed rounded-lg">
                <p className="text-muted-foreground text-center mb-4">
                  Connect directly to Amazon Seller Central API to fetch your data.
                </p>
                <p className="text-sm text-muted-foreground">Coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Upload History</CardTitle>
          <CardDescription>Your recent file uploads and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 p-4 font-medium border-b">
              <div>Filename</div>
              <div>Upload Date</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="grid grid-cols-4 p-4 items-center">
              <div className="text-sm">monthly_sales_report.csv</div>
              <div className="text-sm text-muted-foreground">2 days ago</div>
              <div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                  Processed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-blue-600 hover:underline">View</button>
                <button className="text-sm text-blue-600 hover:underline">Delete</button>
              </div>
            </div>
            <div className="grid grid-cols-4 p-4 items-center border-t">
              <div className="text-sm">inventory_status.xlsx</div>
              <div className="text-sm text-muted-foreground">5 days ago</div>
              <div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                  Processed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-blue-600 hover:underline">View</button>
                <button className="text-sm text-blue-600 hover:underline">Delete</button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

