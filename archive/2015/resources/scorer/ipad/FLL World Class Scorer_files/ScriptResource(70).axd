// Name:        HTMLEditor.Toolbar_buttons.Redo.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.prototype = {
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.callBaseMethod(this, "callMethod")) return false;
        this._designPanel.redo();
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Redo", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

