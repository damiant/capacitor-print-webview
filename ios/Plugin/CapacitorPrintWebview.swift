import Foundation

@objc public class CapacitorPrintWebview: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
