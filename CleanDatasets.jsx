#target illustrator
function test () {
  var doc = app.activeDocument;
  function cycleUpdateAllDatasets (doc) {
    for (var i = 0; i < doc.dataSets.length; i++) {
      var d = doc.dataSets[i];
      d.display();
      d.update();
    };
  };
  cycleUpdateAllDatasets(doc);
}
test();