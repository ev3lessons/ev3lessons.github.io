// Name:        HTMLEditor.Toolbar_buttons.JustifyLeft.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft.prototype = {
    checkState : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft.callBaseMethod(this, "checkState")) return false;
        return this._designPanel._textAlignState("left");
    },
    
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("JustifyLeft");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.JustifyLeft", Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);

