/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20151.46.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

// http://bit.ly/c1ls-piechart
//
myapp.BieuDoTonKhoesPieChart.WijmoChart_render = function (element, contentItem) {

    var div = $("<div/>");
    div.appendTo($(element));
    div.attr("style", "width: 400px; height: 400px");

    contentItem.value.oncollectionchange = function (args) {
        if (args.detail.action !== "refresh") return;

        if (div.children().length) {
            div.wijpiechart("destroy");
        }

        var chart = c1ls.getPieChartContent(contentItem);
        var color = "#999999";

        div.wijpiechart({
            textStyle: {
                "font-family": c1ls.fontFamily
            },
            footer: {
                visible: false,
                text: "Chart Footer",
                textStyle: { fill: color, "font-size": 18 }
            },
            legend: {
                visible: true,
                style: { stroke: color },
                textStyle: { fill: color, "font-size": 10, "font-weight": "bold" }
            },
            showChartLabels: false,
            seriesList: chart.Series,
            click: chart.OnClick,
            hint: chart.Hint
        });
    };

    c1ls.renderControl(contentItem);
};