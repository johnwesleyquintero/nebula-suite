import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Database, FileSpreadsheet, FileUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Nebula Suite dashboard for Amazon seller data management",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link href="/upload">
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload Data
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Upload Reports</CardTitle>
            <Upload className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Upload your Amazon seller reports from CSV, Excel, or Google Sheets.
            </p>
            <Link href="/upload">
              <Button variant="outline" className="w-full">
                <FileUp className="mr-2 h-4 w-4" />
                Upload Files
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Map Data</CardTitle>
            <Database className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Map your uploaded data fields to our system for seamless integration.
            </p>
            <Link href="/mapping">
              <Button variant="outline" className="w-full">
                <Database className="mr-2 h-4 w-4" />
                Map Fields
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Export Data</CardTitle>
            <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Export your processed data to CSV or upload directly to Google Drive.
            </p>
            <Link href="/export">
              <Button variant="outline" className="w-full">
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your recently uploaded and processed data files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <FileSpreadsheet className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">monthly_sales_report.csv</p>
                  <p className="text-xs text-muted-foreground">Uploaded 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>
            <div className="border-t" />
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <FileSpreadsheet className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">inventory_status.xlsx</p>
                  <p className="text-xs text-muted-foreground">Uploaded 5 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

