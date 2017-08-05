// Name:        HTMLEditor.Toolbar_buttons.ForeColor.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor.callBaseMethod(this, "callMethod")) return false;
    },
    
    setColor : function(color) {
        Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor.callBaseMethod(this, "setColor", [color]);
        this._designPanel._execCommand("forecolor", false, color);
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.ForeColor", Sys.Extended.UI.HTMLEditor.ToolbarButton.ColorButton);

