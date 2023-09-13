import * as vscode from "vscode"

import auto_completion from "./src/auto_completion"
import highlighter from "./src/highlighter"

export function activate(context: vscode.ExtensionContext) {
	auto_completion(context)
	highlighter(context)
}