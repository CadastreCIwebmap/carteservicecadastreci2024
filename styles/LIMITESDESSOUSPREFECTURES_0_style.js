var size = 0;
var placement = 'point';

var style_LIMITESDESSOUSPREFECTURES_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "16.900000000000002px \'Arial Black\', sans-serif";
    var labelFill = "#3a4900";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("ADM3_FR") !== null) {
        labelText = String(feature.get("ADM3_FR"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,17,0,1.0)', lineDash: [1,5], lineCap: 'butt', lineJoin: 'miter', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
