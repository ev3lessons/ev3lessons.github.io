// Name:        jQuery.Common.Common.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
// (c) 2010 CodePlex Foundation
(function(window, $) {

$act.args = {
    cancelEventArgs: function() {
        this._cancel = false;

        this.get_cancel = function() {
            return this._cancel;
        };

        this.set_cancel = function(val) {
            this._cancel = val;
        };
    }
};
$act.string = {
    format: function() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i + 1]);
        }

        return s;
    }
};
$act.resources = Sys.Extended.UI.Resources;

    $act.common = {
        
        activateWidget: function (widgetName, el, options) {
            var metadata = this.parseMetaData(widgetName, $(el)),
                widget = $(el)[widgetName]($.extend(metadata, options))
                    .data("ajaxControlToolkit-" + widgetName);
            
            var id = widget.options.id || widget.element.attr('id');
            $act.behaviors[id] = widget;

            return widget;
        },

        parseMetaData: function(name, el) {
            var dataAttrName = 'act-' + name.toLowerCase(),
                strMetadata = el.data(dataAttrName);

            if (!strMetadata) {
                var dataElement = $("data[data-act-target='" + el.attr('id') + "']");
                if (dataElement)
                    strMetadata = dataElement.data(self.dataAttrName);
            }
            if (!strMetadata)
                return null;

            var rgx = /(\w+)(.|\s+)(:)/g, pimp = function(s) {
                return '#$%<*' + s + '$%@#<';
            },
                props = strMetadata.match(rgx),
                tmpMetadata = strMetadata.replace(rgx, pimp('$1$2$3')),
                obj = {};

            for (var i = 0; i < props.length; i++) {
                var prop = pimp(props[i]),
                    idx = tmpMetadata.indexOf(prop) + prop.length,
                    nextIdx = (i < props.length - 1)
                        ? tmpMetadata.indexOf(pimp(props[i + 1])) - 1
                        : tmpMetadata.length,
                    propVal = tmpMetadata.substring(idx, nextIdx);
                
                if (propVal.startsWith("'") && propVal.endsWith("'"))
                    propVal = $('<div/>').html(propVal.substr(1, propVal.length - 2)).text();
                
                else if (!isNaN(propVal))
                    propVal = parseFloat(propVal);
                else {
                    
                    var val=propVal.toLowerCase().trim();
                    if (val == "true" || val == "false")
                        propVal = Boolean(val == "true" ? 1 : 0);
                }

                obj[props[i].trim().slice(0, -1)] = propVal;
            }

            return obj;
        },
        
        doPostBack: function () {
            if (!window.__doPostBack)
                throw "can't find MS Ajax __doPostBack method";
            
            return window.__doPostBack.apply(window, arguments);
        },
        
        pascalCase: function(str) {
            return str.charAt(0).toUpperCase() + str.substr(1);
        }
    };
    
})(window, actJQuery);
