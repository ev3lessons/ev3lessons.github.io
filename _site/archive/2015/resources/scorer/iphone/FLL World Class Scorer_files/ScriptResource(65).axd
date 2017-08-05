// Name:        HTMLEditor.Toolbar_buttons.Paste.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.ToolbarButton");

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste = function(element) {
    Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste.initializeBase(this, [element]);
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste.prototype = {
    canBeShown : function() {
        return Sys.Extended.UI.HTMLEditor.isIE;
    },
    
    callMethod : function() {
        if(!Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste.callBaseMethod(this, "callMethod")) return false;
        var editor = this._designPanel;

        if(Sys.Extended.UI.HTMLEditor.isIE) {
            editor._saveContent();
            editor.openWait();
            setTimeout(function(){editor._paste(true); editor.closeWait();},0)
        } else {
            var sel   = editor._getSelection();
            var range = editor._createRange(sel);

            editor._removeAllRanges(sel);
            alert(String.format(Sys.Extended.UI.Resources.HTMLEditor_toolbar_button_Use_verb, (Sys.Extended.UI.HTMLEditor.isSafari && navigator.userAgent.indexOf("mac") != -1)?"Apple-V":"Ctrl-V" ));
            editor._selectRange(sel,range);
            editor.isWord = false;
            editor.isPlainText = false;
        }
    }
}

Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste.registerClass("Sys.Extended.UI.HTMLEditor.ToolbarButton.Paste", Sys.Extended.UI.HTMLEditor.ToolbarButton.MethodButton);

