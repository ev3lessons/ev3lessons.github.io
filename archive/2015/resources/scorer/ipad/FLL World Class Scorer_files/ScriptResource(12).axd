// Name:        AjaxFileUpload.AjaxFileUpload.CompleteAllEventArgs.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs = function (filesInQueue, filesUploaded, reason, serverArguments) {
    if (arguments.length != 4) throw Error.parameterCount();

    Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs.initializeBase(this);
    this._filesInQueue = filesInQueue;
    this._filesUploaded = filesUploaded;
    this._reason = reason;
    this._serverArguments = serverArguments;
};

Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs.prototype = {
    get_filesInQueue: function () {
        return this._filesInQueue;
    },
    get_reason: function () {
        return this._reason;
    },
    get_filesUploaded: function () {
        return this._filesUploaded;
    },
    get_serverArguments: function () {
        return this._serverArguments;
    }
};

Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs.registerClass('Sys.Extended.UI.AjaxFileUploadCompleteAllEventArgs', Sys.EventArgs);
