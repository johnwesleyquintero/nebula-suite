import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"
import { MermaidDiagram } from "@/components/mermaid-diagram"
import { architectureDiagrams, diagramTitles } from "@/lib/docs/diagrams"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to use Nebula Suite to process and analyze your Amazon seller data.
        </p>
      </div>

      {/* Quick Overview Alert */}
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Getting Started</AlertTitle>
        <AlertDescription>
          Nebula Suite helps you process Amazon seller data through a streamlined pipeline. Upload your data, map
          fields, and export processed results.
        </AlertDescription>
      </Alert>

      {/* Architecture Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Architecture</CardTitle>
          <CardDescription>Understanding how Nebula Suite is built and organized</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="dataPipeline" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
              <TabsTrigger value="dataPipeline">Data Pipeline</TabsTrigger>
              <TabsTrigger value="serverClient">Server/Client</TabsTrigger>
              <TabsTrigger value="dataFetching">Data Fetching</TabsTrigger>
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="authenticationFlow">Authentication Flow</TabsTrigger>
              <TabsTrigger value="codeOrganization">Organization</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>

            {Object.entries(architectureDiagrams).map(([key, diagram]) => (
              <TabsContent key={key} value={key} className="pt-4">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="mb-4 text-lg font-medium">{diagramTitles[key as keyof typeof diagramTitles]}</h3>
                  <MermaidDiagram chart={diagram} />
                </div>
              </TabsContent>
            ))}
            <TabsContent value="authenticationFlow" className="pt-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-lg font-medium">Authentication Flow</h3>
                <MermaidDiagram chart={`graph TD;
    A["Middleware"]-->B["Route Protection"]
    A-->C["CSRF Protection"]
    D["Auth Provider"]-->E["User Session"]
    D-->F["Auth State"]
    G["Server Actions"]-->H["Protected Mutations"]`} />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Feature Documentation */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>Detailed documentation of Nebula Suite's core features</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Data Upload</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload your Amazon seller reports through various methods:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Direct file upload (CSV, Excel)</li>
              <li>Google Sheets integration</li>
              <li>Amazon API connection</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Data Mapping</h3>
            <p className="text-sm text-muted-foreground mb-4">Map your data fields to our standardized format:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Interactive field mapping interface</li>
              <li>Automatic field detection</li>
              <li>Mapping templates</li>
              <li>Validation and error checking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Data Processing</h3>
            <p className="text-sm text-muted-foreground mb-4">Process and transform your data:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Automated data validation</li>
              <li>Format standardization</li>
              <li>Error handling and reporting</li>
              <li>Batch processing capabilities</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Export Options</h3>
            <p className="text-sm text-muted-foreground mb-4">Export your processed data in various formats:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>CSV export</li>
              <li>Excel export</li>
              <li>Direct to Google Drive</li>
              <li>API access</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
