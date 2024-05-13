import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorPrintWebviewPlugin)
public class CapacitorPrintWebviewPlugin: CAPPlugin {
    private let implementation = CapacitorPrintWebview()

    @objc func print(_ call: CAPPluginCall) {
        let webView = self.webView
        DispatchQueue.main.async {
            let webviewPrint = webView?.viewPrintFormatter()
            let printInfo = UIPrintInfo(dictionary: nil)
            printInfo.jobName = "page"
            printInfo.outputType = .general
            let printController = UIPrintInteractionController.shared
            printController.printInfo = printInfo
            printController.showsNumberOfCopies = false
            printController.printFormatter = webviewPrint
            printController.present(animated: true, completionHandler: nil)
            call.resolve()
        }
    }
}
