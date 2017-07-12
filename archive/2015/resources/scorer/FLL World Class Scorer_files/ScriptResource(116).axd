// Name:        HTMLEditor.Toolbar_buttons.IncreaseIndent.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("Indent");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.IncreaseIndent", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

