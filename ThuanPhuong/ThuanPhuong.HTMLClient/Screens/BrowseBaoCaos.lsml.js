/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseBaoCaos.ShowGroup_Tap_execute = function (screen) {
    // Write code here.
    $(window).one("popupcreate", function (e) {
        $(e.target).popup({
            positionTo: "top"
        });
    });
    screen.showPopup("Group");

};