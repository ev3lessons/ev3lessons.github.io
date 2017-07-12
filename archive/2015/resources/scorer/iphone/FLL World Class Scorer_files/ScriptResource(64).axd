// Name:        HTMLEditor.Toolbar_buttons.Paragraph.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph.prototype = {
    checkState : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph.callBaseMethod(this, "checkState")) return false;
        return this._designPanel._textAlignState("");
    },
    
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph.callBaseMethod(this, "callMethod")) return false;
        this._designPanel._execCommand("Paragraph");
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Paragraph", Sys.Extended.UI.HTMLEditor.ToolbarButton.EditorToggleButton);

