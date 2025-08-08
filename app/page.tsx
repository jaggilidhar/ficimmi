import { AlertTriangle, Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">FCI Immigration</h1>
            <p className="text-xl text-slate-600">Immigration Consulting Services</p>
          </div>

          {/* Closure Notice */}
          <Alert className="mb-12 border-red-200 bg-red-50">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <AlertTitle className="text-2xl font-semibold text-red-800 mb-2">Business Permanently Closed</AlertTitle>
            <AlertDescription className="text-lg text-red-700">
              We regret to inform you that FCI Immigration has permanently ceased operations as of this date. We are no
              longer accepting new clients or providing immigration consulting services.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* For Existing Clients */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">For Existing Clients</CardTitle>
                <CardDescription>Important information regarding your ongoing cases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  If you are an existing client with an ongoing case, please contact us immediately to discuss the
                  transfer of your file to another qualified immigration consultant.
                </p>
                <p className="text-slate-700">
                  We are committed to ensuring a smooth transition of your immigration matters and will provide you with
                  all necessary documentation.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-800 mb-2">Urgent Contact Required:</p>
                  <p className="text-sm text-slate-600">Please reach out within 30 days to arrange file transfer</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Contact Information</CardTitle>
                <CardDescription>For urgent matters and file transfers only</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="font-medium text-slate-800">Phone</p>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-500" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">closure@fciimmigration.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-slate-500 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Office</p>
                    <p className="text-slate-600">
                      123 Immigration Way
                      <br />
                      Suite 456
                      <br />
                      City, State 12345
                    </p>
                    <p className="text-sm text-red-600 mt-1">⚠️ Office permanently closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">Important Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                We sincerely apologize for any inconvenience this closure may cause. Our decision to cease operations
                was not made lightly, and we understand the impact this may have on our clients and their immigration
                journeys.
              </p>
              <p className="text-slate-700">
                We recommend that you seek alternative immigration consulting services from licensed and regulated
                immigration consultants or lawyers to continue with your immigration matters.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-blue-800 font-medium mb-2">Finding Alternative Services:</p>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Contact the Immigration Consultants of Canada Regulatory Council (ICCRC)</li>
                  <li>• Consult with licensed immigration lawyers</li>
                  <li>• Visit the official government immigration website for resources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-slate-500 text-sm">
            <p>© 2024 FCI Immigration - Business Permanently Closed</p>
            <p className="mt-2">This website will remain active for a limited time to provide closure information</p>
          </div>
        </div>
      </div>
    </div>
  )
}
