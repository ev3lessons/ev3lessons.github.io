// Name:        HTMLEditor.Popups.AttachedTemplatePopup.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Type.registerNamespace("Sys.Extended.UI.HTMLEditor.Popups");

Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup = function(element) {
    Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup.initializeBase(this, [element]);

    this._contentDiv = null;
}

Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup.prototype = {

    get_contentDiv : function() {
        return this._contentDiv;
    },

    set_contentDiv : function(value) {
        this._contentDiv = value;
    },
    
    initialize : function() {
        Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup.callBaseMethod(this, "initialize");
        this.set_initialContent(this._contentDiv.innerHTML);
    },
    
    dispose : function() {
        Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup.callBaseMethod(this, "dispose");
    }
}

Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup.registerClass("Sys.Extended.UI.HTMLEditor.Popups.AttachedTemplatePopup", Sys.Extended.UI.HTMLEditor.Popups.AttachedPopup);
