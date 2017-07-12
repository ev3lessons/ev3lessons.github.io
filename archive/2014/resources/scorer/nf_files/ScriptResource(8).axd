// Name:        AjaxFileUpload.AjaxFileUpload.StartEventArgs.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Sys.Extended.UI.AjaxFileUploadStartEventArgs = function (filesInQueue, serverArguments) {
    if (arguments.length != 2) throw Error.parameterCount();

    Sys.Extended.UI.AjaxFileUploadStartEventArgs.initializeBase(this);
    this._filesInQueue = filesInQueue;
    this._serverArguments = serverArguments;
};

Sys.Extended.UI.AjaxFileUploadStartEventArgs.prototype = {
    get_filesInQueue: function () {
        return this._filesInQueue;
    },
    get_serverArguments: function () {
        return this._serverArguments;
    }
};

Sys.Extended.UI.AjaxFileUploadStartEventArgs.registerClass('Sys.Extended.UI.AjaxFileUploadStartEventArgs', Sys.EventArgs);
