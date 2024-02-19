var size = 0;
var placement = 'point';

var style_LIMITESDESDEPARTEMENTS_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "26.0px \'Arial Black\', sans-serif";
    var labelFill = "#201dcb";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("ADM2_FR") !== null) {
        labelText = String(feature.get("ADM2_FR"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(32,29,203,1.0)', lineDash: [1,5], lineCap: 'butt', lineJoin: 'miter', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
