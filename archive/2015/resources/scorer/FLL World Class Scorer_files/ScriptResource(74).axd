// Name:        HTMLEditor.Toolbar_buttons.JustifyCenter.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.prototype = {
    checkState : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.callBaseMethod(this, "checkState")) return false;
        return this._designPanel._textAlignState("center");
    },
    
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("JustifyCenter");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyCenter", Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);

