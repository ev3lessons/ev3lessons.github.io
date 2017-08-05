// Name:        Seadragon.Seadragon.DisplayRect.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');

Sys.Extended.UI.Seadragon.DisplayRect = function(x, y, width, height, minLevel, maxLevel) {
Sys.Extended.UI.Seadragon.DisplayRect.initializeBase(this, [x, y, width, height]);

    this.minLevel = minLevel;
    this.maxLevel = maxLevel;
};
Sys.Extended.UI.Seadragon.DisplayRect.registerClass('Sys.Extended.UI.Seadragon.DisplayRect', Sys.Extended.UI.Seadragon.Rect);
