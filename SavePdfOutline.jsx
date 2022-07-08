try {

    if (app.documents.length > 0) {

        var options, i, sourceDoc, targetFile;

        options = this.getOptions();

        app.executeMenuCommand("selectall");
        app.executeMenuCommand("OffsetPath v22");
        app.executeMenuCommand("outline");

        var targetFile = getTargetFile(app.activeDocument.path, 'pdf', )

        app.activeDocument.saveAs(targetFile, options);
        app.activeDocument.close();
    }
} catch(err) {
    alert(err)
}

function getOptions() {
    var NamePreset = '[PDF/X-3:2002]';

    var options = new PDFSaveOptions();

    options.pDFPreset = NamePreset;

    return options;

}

function getTargetFile(docName, ext, destFolder) {

    var newName = "";

    if (docName.indexOf('.') < 0) {

        newName = docName + ext;

    } else {

        var dot = docName.lastIndexOf('.');

        newName += docName.substring(0, dot);

        newName += ext;

    }

    var myFile = new File(destFolder + '/' + newName);

    if (myFile.open("w")) {

        myFile.close();

    }

    else {

        throw new Error('Access is denied');

    }

    return myFile;

}