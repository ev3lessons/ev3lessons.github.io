// Name:        HTMLEditor.Toolbar_buttons.ForeColorClear.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("forecolor", false, "");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColorClear", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

