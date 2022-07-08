/**********************************************************
	export to PDF with filename += dataset.name
**********************************************************/

#target illustrator

// Main Code [Execution of script begins here]

// uncomment to suppress Illustrator warning dialogs
// app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

// Select the destination folder.
var destinationFolder = Folder.selectDialog('Select the export folder');

var d = app.activeDocument;

var doc = app.activeDocument;
function cycleUpdateAllDatasets(doc) {
    for (var i = 0; i < doc.dataSets.length; i++) {
        var d = doc.dataSets[i];
        d.display();
        d.update();
    };
};
cycleUpdateAllDatasets(doc);

if (app.documents.length > 0) {
    var filePath = d.path;
    var fileName = d.name.split('.', 1);
    var saveOptions = new PDFSaveOptions();

    //	saveOptions.pDFPreset = ""; // you can set your export preset here

    if (d.dataSets.length > 0) {
        for (i = 0; i < d.dataSets.length; i++) {
            d.dataSets[i].display();
            exportDataset(fileName + ' ' + d.dataSets[i].name);
        }
    } else {
        exportDataset(fileName);
    }
}

function exportDataset(fileName) {
    var newFileName = new File(destinationFolder + '/' + fileName);
    return app.activeDocument.saveAs(newFileName, saveOptions);
    //	return app.activeDocument.exportFile(fileExport, type, exportOptions); 
}