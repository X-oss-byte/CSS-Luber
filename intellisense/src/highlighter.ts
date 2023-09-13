import * as vscode from "vscode"

export default (context: vscode.ExtensionContext) => {
	// eslint-disable-next-line no-undef
	let timeout: NodeJS.Timeout|void
	const small_number_decoration_type = vscode.window.createTextEditorDecorationType({
		borderWidth: "1px",
		borderStyle: "solid",
		overviewRulerColor: "blue",
		overviewRulerLane: vscode.OverviewRulerLane.Right,
		light: {
			borderColor: "darkblue"
		},
		dark: {
			borderColor: "lightblue"
		}
	})

	let active_editor = vscode.window.activeTextEditor

	function update_decorations() {
		if (!active_editor) return
		const regexp = /\d+/g
		const text = active_editor.document.getText()
		const small_numbers: vscode.DecorationOptions[] = []
		const large_numbers: vscode.DecorationOptions[] = []
		let match
		while ((match = regexp.exec(text))) {
			const start_pos = active_editor.document.positionAt(match.index)
			const end_pos = active_editor.document.positionAt(match.index + match[0].length)
			const decoration = {
				range: new vscode.Range(start_pos, end_pos),
				hoverMessage: "Number **" + match[0] + "**" 
			}
			if (match[0].length < 3) {
				small_numbers.push(decoration)
			} else {
				large_numbers.push(decoration)
			}
		}
		active_editor.setDecorations(small_number_decoration_type, small_numbers)
	}

	function trigger_update_decorations(throttle = false) {
		if (timeout) {
			clearTimeout(timeout)
			timeout = void 0
		}
		if (throttle) {
			timeout = setTimeout(update_decorations, 500)
		} else {
			update_decorations()
		}
	}

	if (active_editor) {
		trigger_update_decorations()
	}

	vscode.window.onDidChangeActiveTextEditor(
		editor => {
			active_editor = editor
			if (editor) {
				trigger_update_decorations()
			}
		},
		null,
		context.subscriptions
	)

	vscode.workspace.onDidChangeTextDocument(
		event => {
			if (active_editor && event.document === active_editor.document) {
				trigger_update_decorations(true)
			}
		},
		null,
		context.subscriptions
	)
}