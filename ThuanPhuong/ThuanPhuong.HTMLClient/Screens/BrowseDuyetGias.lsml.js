/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.BrowseDuyetGias.RowTemplate_postRender = function (element, contentItem) {
    // Write code here.
    var entity = contentItem.value;
    //If IsAvailable is true then the color of List row would be green
    //If IsAvailable is false then the color of List row would be red
    function refresh() {
        var color = "#F5858B";
        element.childNodes.item(3).textContent = "Chưa duyệt"
        //var color = "#85F5B4";
        if (entity.Duyet) {
            color = "#85F5B4";
           element.childNodes.item(3).textContent = "Đã duyệt"
        }
        $(element).closest("li").css("background", color);
    }
    refresh();
    entity.addChangeListener("Duyet", refresh);

};
myapp.BrowseDuyetGias.Lưu_execute = function (screen) {
    // Write code here.
    myapp.activeDataWorkspace.DuyetGiaData.saveChanges().then(function () {
          
        //window.alert("LƯU THÀNH CÔNG !");
        msls.showMessageBox("Lưu thành công !!!", { title: "" });
        //window.location.reload();

        //screen.getChọn_Món_Chi_Tiết();

    });

    
};
myapp.BrowseDuyetGias.Lưu_postRender = function (element, contentItem) {
    // Write code here.
    $(element).addClass("double-size-button");
};

myapp.BrowseDuyetGias.ĐÓNG_execute = function (screen) {
    // Write code here.
    screen.closePopup();
};

