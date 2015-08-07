/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20151.46.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

myapp.Home.ScreenContent_render = function (element, contentItem) {

    var ul = "<ul class='msls-tile-list ui-listview' data-role='listview' data-inset='true'>";
    var liClass = "ui-li ui-btn ui-btn-up-a";
    var divClass = "msls-presenter msls-list-child msls-ctl-group-custom-control msls-vauto msls-hstretch msls-compact-padding msls-presenter-content msls-hscroll";
    var border = "border-left-width:1px; border-right-width:1px; border-top-width:1px; border-bottom-width:1px;";
    var width = "width:254px;";

    var items = [];
    var excluded = ["Screen", "AddEditDuyetGia","ViewBaoCao","ViewDuyetGia"];
    excluded.push(contentItem.screen.details.getModel().name);

    $.each(myapp, function (key, value) {
        if (key.slice(0, 4) === "show") {
            var name = key.substring(4);

            if (excluded.indexOf(name) < 0) {
                myapp[name].prototype.constructor([], undefined);
                var model = myapp[name].prototype.details.getModel();
                var display = model.displayName;
                var tap = " onclick=myapp." + key + "()";
                var li = "<li title='" + display + "' class='" + liClass + "' data-msls='true' style='" + width + border + "'" + tap + ">";
                var div = "<div class='" + divClass + "'><span>" + display + "</span></div>" + "</li>";
                items.push(li + div);
            }
        }
    });

    items.sort();
    ul = ul + items.join("\r\n") + "</ul>";
    $(ul).appendTo($(element));

};