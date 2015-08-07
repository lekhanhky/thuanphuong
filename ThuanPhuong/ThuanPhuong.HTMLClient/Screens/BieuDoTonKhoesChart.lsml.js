/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-3.0.20151.46.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

// http://bit.ly/c1ls-barchart
// http://bit.ly/c1ls-linechart
// http://bit.ly/c1ls-scatterchart
//
myapp.BieuDoTonKhoesChart.WijmoChart_render = function (element, contentItem) {

    var div = $("<div/>");
    div.appendTo($(element));
    div.attr("style", "height: 400px");

    contentItem.value.oncollectionchange = function (args) {
        if (args.detail.action !== "refresh") return;

        if (div.children().length) {
            div.wijbarchart("destroy");
        }

        var chart = c1ls.getChartContent(contentItem);
        var color = "#999999";

        div.wijbarchart({ // also works with wijlinechart and wijscatterchart
            textStyle: {
                "font-family": c1ls.fontFamily
            },
            header: {
                visible: false,
                text: "Chart Header",
                textStyle: { fill: color }
            },
            legend: {
                visible: true,
                style: { stroke: color },
                textStyle: { fill: color, "font-size": 10, "font-weight": "bold" }
            },
            axis: {
                x: { labels: { style: { fill: color }}},
                y: { autoMin: false, min: 0, labels: { style: { fill: color }, textAlign: "near" }}
            },
            horizontal: false,
            stacked: false,
            showChartLabels: false,
            seriesList: chart.Series,
            click: chart.OnClick,
            hint: chart.Hint
        });
    };

    c1ls.renderControl(contentItem);
};