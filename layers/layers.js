var wms_layers = [];

var format_LIMITESDESSOUSPREFECTURES_0 = new ol.format.GeoJSON();
var features_LIMITESDESSOUSPREFECTURES_0 = format_LIMITESDESSOUSPREFECTURES_0.readFeatures(json_LIMITESDESSOUSPREFECTURES_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESDESSOUSPREFECTURES_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESDESSOUSPREFECTURES_0.addFeatures(features_LIMITESDESSOUSPREFECTURES_0);
var lyr_LIMITESDESSOUSPREFECTURES_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESDESSOUSPREFECTURES_0, 
                style: style_LIMITESDESSOUSPREFECTURES_0,
                interactive: true,
                title: '<img src="styles/legend/LIMITESDESSOUSPREFECTURES_0.png" /> LIMITES DES SOUS-PREFECTURES'
            });
var format_LIMITESDESDEPARTEMENTS_1 = new ol.format.GeoJSON();
var features_LIMITESDESDEPARTEMENTS_1 = format_LIMITESDESDEPARTEMENTS_1.readFeatures(json_LIMITESDESDEPARTEMENTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESDESDEPARTEMENTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESDESDEPARTEMENTS_1.addFeatures(features_LIMITESDESDEPARTEMENTS_1);
var lyr_LIMITESDESDEPARTEMENTS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESDESDEPARTEMENTS_1, 
                style: style_LIMITESDESDEPARTEMENTS_1,
                interactive: true,
                title: '<img src="styles/legend/LIMITESDESDEPARTEMENTS_1.png" /> LIMITES DES DEPARTEMENTS'
            });
var format_LIMITECOTEDIVOIRE_2 = new ol.format.GeoJSON();
var features_LIMITECOTEDIVOIRE_2 = format_LIMITECOTEDIVOIRE_2.readFeatures(json_LIMITECOTEDIVOIRE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITECOTEDIVOIRE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITECOTEDIVOIRE_2.addFeatures(features_LIMITECOTEDIVOIRE_2);
var lyr_LIMITECOTEDIVOIRE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITECOTEDIVOIRE_2, 
                style: style_LIMITECOTEDIVOIRE_2,
                interactive: true,
                title: '<img src="styles/legend/LIMITECOTEDIVOIRE_2.png" /> LIMITE COTE D\'IVOIRE'
            });
var format_LIMITESCAD_3 = new ol.format.GeoJSON();
var features_LIMITESCAD_3 = format_LIMITESCAD_3.readFeatures(json_LIMITESCAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESCAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCAD_3.addFeatures(features_LIMITESCAD_3);
var lyr_LIMITESCAD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESCAD_3, 
                style: style_LIMITESCAD_3,
                interactive: true,
    title: 'LIMITE SCAD<br />\
    <img src="styles/legend/LIMITESCAD_3_0.png" /> SCAD ABENGOUROU<br />\
    <img src="styles/legend/LIMITESCAD_3_1.png" /> SCAD ABOISSO<br />\
    <img src="styles/legend/LIMITESCAD_3_2.png" /> SCAD ADZOPE<br />\
    <img src="styles/legend/LIMITESCAD_3_3.png" /> SCAD AGBOVILLE<br />\
    <img src="styles/legend/LIMITESCAD_3_4.png" /> SCAD ANYAMA<br />\
    <img src="styles/legend/LIMITESCAD_3_5.png" /> SCAD BINGERVILLE<br />\
    <img src="styles/legend/LIMITESCAD_3_6.png" /> SCAD BONDOUKOU<br />\
    <img src="styles/legend/LIMITESCAD_3_7.png" /> SCAD BOUAFLE<br />\
    <img src="styles/legend/LIMITESCAD_3_8.png" /> SCAD BOUAKE 1<br />\
    <img src="styles/legend/LIMITESCAD_3_9.png" /> SCAD BOUAKE 2<br />\
    <img src="styles/legend/LIMITESCAD_3_10.png" /> SCAD BOUNA<br />\
    <img src="styles/legend/LIMITESCAD_3_11.png" /> SCAD BOUNDIALI<br />\
    <img src="styles/legend/LIMITESCAD_3_12.png" /> SCAD DABOU<br />\
    <img src="styles/legend/LIMITESCAD_3_13.png" /> SCAD DALOA<br />\
    <img src="styles/legend/LIMITESCAD_3_14.png" /> SCAD DANANE<br />\
    <img src="styles/legend/LIMITESCAD_3_15.png" /> SCAD DAOUKRO<br />\
    <img src="styles/legend/LIMITESCAD_3_16.png" /> SCAD DIMBOKRO<br />\
    <img src="styles/legend/LIMITESCAD_3_17.png" /> SCAD DIVO<br />\
    <img src="styles/legend/LIMITESCAD_3_18.png" /> SCAD DUEKOUE<br />\
    <img src="styles/legend/LIMITESCAD_3_19.png" /> SCAD FERKE<br />\
    <img src="styles/legend/LIMITESCAD_3_20.png" /> SCAD GAGNOA<br />\
    <img src="styles/legend/LIMITESCAD_3_21.png" /> SCAD GRAND BASSAM<br />\
    <img src="styles/legend/LIMITESCAD_3_22.png" /> SCAD GUIGLO<br />\
    <img src="styles/legend/LIMITESCAD_3_23.png" /> SCAD KATIOLA<br />\
    <img src="styles/legend/LIMITESCAD_3_24.png" /> SCAD KORHOGO<br />\
    <img src="styles/legend/LIMITESCAD_3_25.png" /> SCAD MAN<br />\
    <img src="styles/legend/LIMITESCAD_3_26.png" /> SCAD ODIENNE<br />\
    <img src="styles/legend/LIMITESCAD_3_27.png" /> SCAD SAN PEDRO<br />\
    <img src="styles/legend/LIMITESCAD_3_28.png" /> SCAD SASSANDRA<br />\
    <img src="styles/legend/LIMITESCAD_3_29.png" /> SCAD SEGUELA<br />\
    <img src="styles/legend/LIMITESCAD_3_30.png" /> SCAD SOUBRE<br />\
    <img src="styles/legend/LIMITESCAD_3_31.png" /> SCAD TOUBA<br />\
    <img src="styles/legend/LIMITESCAD_3_32.png" /> SCAD YAMOUSSOUKRO<br />\
    <img src="styles/legend/LIMITESCAD_3_33.png" /> <br />'
        });
var format_CIFUSEAUX29N30N_4 = new ol.format.GeoJSON();
var features_CIFUSEAUX29N30N_4 = format_CIFUSEAUX29N30N_4.readFeatures(json_CIFUSEAUX29N30N_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIFUSEAUX29N30N_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIFUSEAUX29N30N_4.addFeatures(features_CIFUSEAUX29N30N_4);
var lyr_CIFUSEAUX29N30N_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIFUSEAUX29N30N_4, 
                style: style_CIFUSEAUX29N30N_4,
                interactive: true,
                title: '<img src="styles/legend/CIFUSEAUX29N30N_4.png" /> CI - FUSEAUX 29N-30N'
            });

lyr_LIMITESDESSOUSPREFECTURES_0.setVisible(true);lyr_LIMITESDESDEPARTEMENTS_1.setVisible(true);lyr_LIMITECOTEDIVOIRE_2.setVisible(true);lyr_LIMITESCAD_3.setVisible(true);lyr_CIFUSEAUX29N30N_4.setVisible(true);
var layersList = [lyr_LIMITESDESSOUSPREFECTURES_0,lyr_LIMITESDESDEPARTEMENTS_1,lyr_LIMITECOTEDIVOIRE_2,lyr_LIMITESCAD_3,lyr_CIFUSEAUX29N30N_4];
lyr_LIMITESDESSOUSPREFECTURES_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_FR': 'SOUS-PREFECTURE', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1FR': 'ADM3ALT1FR', 'ADM3ALT2FR': 'ADM3ALT2FR', 'ADM2_FR': 'ADM2_FR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_FR': 'ADM1_FR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_LIMITESDESDEPARTEMENTS_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_FR': 'ADM2_FR', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1FR': 'ADM2ALT1FR', 'ADM2ALT2FR': 'ADM2ALT2FR', 'ADM1_FR': 'ADM1_FR', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'ValidTo': 'ValidTo', });
lyr_LIMITECOTEDIVOIRE_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM0_FR': 'ADM0_FR', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM0_REF': 'ADM0_REF', 'ADM0ALT1FR': 'ADM0ALT1FR', 'ADM0ALT2FR': 'ADM0ALT2FR', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'SUPERFICIE': 'SUPERFICIE', });
lyr_LIMITESCAD_3.set('fieldAliases', {'fid': 'fid', 'SCAD': 'SCAD', 'SUPERFICIE': 'SUPERFICIE', });
lyr_CIFUSEAUX29N30N_4.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', });
lyr_LIMITESDESSOUSPREFECTURES_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_FR': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1FR': 'TextEdit', 'ADM3ALT2FR': 'TextEdit', 'ADM2_FR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_FR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_LIMITESDESDEPARTEMENTS_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_FR': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1FR': 'TextEdit', 'ADM2ALT2FR': 'TextEdit', 'ADM1_FR': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'ValidTo': 'DateTime', });
lyr_LIMITECOTEDIVOIRE_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM0_FR': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'ADM0_REF': 'TextEdit', 'ADM0ALT1FR': 'TextEdit', 'ADM0ALT2FR': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'SUPERFICIE': '', });
lyr_LIMITESCAD_3.set('fieldImages', {'fid': 'TextEdit', 'SCAD': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_CIFUSEAUX29N30N_4.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', });
lyr_LIMITESDESSOUSPREFECTURES_0.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_FR': 'inline label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1FR': 'no label', 'ADM3ALT2FR': 'no label', 'ADM2_FR': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_FR': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_LIMITESDESDEPARTEMENTS_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_FR': 'inline label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1FR': 'no label', 'ADM2ALT2FR': 'no label', 'ADM1_FR': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'ValidTo': 'no label', });
lyr_LIMITECOTEDIVOIRE_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM0_FR': 'no label', 'ADM0_PCODE': 'no label', 'ADM0_REF': 'no label', 'ADM0ALT1FR': 'no label', 'ADM0ALT2FR': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'SUPERFICIE': 'no label', });
lyr_LIMITESCAD_3.set('fieldLabels', {'fid': 'no label', 'SCAD': 'inline label', 'SUPERFICIE': 'inline label', });
lyr_CIFUSEAUX29N30N_4.set('fieldLabels', {'fid': 'no label', 'NOM': 'inline label', });
lyr_CIFUSEAUX29N30N_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});