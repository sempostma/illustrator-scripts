try {  

    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS; 
    
    if (app.documents.length > 0 ) { 
    
    var destFolder = null; 
    
    destFolder = Folder.selectDialog( 'Select folder for PDF files.', '~'); 
    
    if (destFolder != null) { 
    
    var options, i, sourceDoc, targetFile; 
    
    options = this.getOptions();  
    
    while (app.documents.length > 0) { 
    
    sourceDoc = app.activeDocument
    
    app.executeMenuCommand("selectall");
    app.executeMenuCommand("OffsetPath v22");  
    app.executeMenuCommand("outline");
    
    
    
    targetFile = this.getTargetFile(sourceDoc.name, '.pdf', destFolder); 
    
    sourceDoc.saveAs( targetFile, options ); 
    app.activeDocument.close();
    
    } 
    
    alert( 'Documents saved as PDF' ); 
    
    } 
    
    } 
    
    else{ 
    
    throw new Error('There are no document open!'); 
    
    } 
    
    } 
    
    catch(e) { 
    
    alert( e.message, "Script Alert", true); 
    
    } 
    
    function getOptions() 
    
    { var NamePreset = '[PDF/X-3:2002]'; 
    
    var options = new PDFSaveOptions(); 
    
    options.pDFPreset=NamePreset;  
    
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
    
    var myFile = new File( destFolder + '/' + newName ); 
    
    if (myFile.open("w")) { 
    
    myFile.close(); 
    
    } 
    
    else { 
    
    throw new Error('Access is denied'); 
    
    } 
    
    return myFile; 
    
    }