import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { DataMapper } from "@/components/data-mapper"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function MappingPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4">
        <Breadcrumbs />
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Data Mapping</h1>
          <Button>Save Mapping</Button>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Map Your Data</AlertTitle>
          <AlertDescription>
            Map the columns from your uploaded file to our system fields. This helps us understand your data structure.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Map Fields from monthly_sales_report.csv</CardTitle>
            <CardDescription>
              Drag and drop or select the corresponding fields to map your data columns to our system fields.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataMapper />
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Validation Results</CardTitle>
            <CardDescription>
              We validate your data to ensure it meets the required format and structure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-md bg-green-50 dark:bg-green-900/20">
                <h3 className="font-medium text-green-800 dark:text-green-300">Success</h3>
                <p className="text-sm text-green-700 dark:text-green-400">
                  All mapped fields have been validated successfully.
                </p>
              </div>

              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Field Mapping Summary</h3>
                <div className="mt-2 space-y-2">
                  <div className="grid grid-cols-3 text-sm">
                    <div className="font-medium">Your Field</div>
                    <div className="font-medium">System Field</div>
                    <div className="font-medium">Status</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div>product_id</div>
                    <div>ASIN</div>
                    <div className="text-green-600">Valid</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div>product_name</div>
                    <div>Title</div>
                    <div className="text-green-600">Valid</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div>units_sold</div>
                    <div>Units</div>
                    <div className="text-green-600">Valid</div>
                  </div>
                  <div className="grid grid-cols-3 text-sm">
                    <div>revenue</div>
                    <div>Revenue</div>
                    <div className="text-green-600">Valid</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

