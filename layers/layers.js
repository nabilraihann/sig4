var wms_layers = [];

var format_jkt_0 = new ol.format.GeoJSON();
var features_jkt_0 = format_jkt_0.readFeatures(json_jkt_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jkt_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jkt_0.addFeatures(features_jkt_0);
var lyr_jkt_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jkt_0, 
                style: style_jkt_0,
                popuplayertitle: "jkt",
                interactive: true,
    title: 'jkt<br />\
    <img src="styles/legend/jkt_0_0.png" /> 0<br />\
    <img src="styles/legend/jkt_0_1.png" /> 1<br />'
        });

lyr_jkt_0.setVisible(true);
var layersList = [lyr_jkt_0];
lyr_jkt_0.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', 'kecamatan': 'kecamatan', 'path': 'path', 'LK Realisa': 'LK Realisa', 'LK Persen': 'LK Persen', 'PR Realisa': 'PR Realisa', 'PR Persen': 'PR Persen', 'LK Selisih': 'LK Selisih', 'PR Selisih': 'PR Selisih', 'Cluster': 'Cluster', });
lyr_jkt_0.set('fieldImages', {'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', 'kecamatan': 'TextEdit', 'path': 'TextEdit', 'LK Realisa': 'TextEdit', 'LK Persen': 'TextEdit', 'PR Realisa': 'TextEdit', 'PR Persen': 'TextEdit', 'LK Selisih': 'TextEdit', 'PR Selisih': 'TextEdit', 'Cluster': 'TextEdit', });
lyr_jkt_0.set('fieldLabels', {'osm_id': 'hidden field', 'class': 'hidden field', 'type': 'hidden field', 'name': 'hidden field', 'address': 'hidden field', 'extratags': 'hidden field', 'kecamatan': 'header label - visible with data', 'path': 'hidden field', 'LK Realisa': 'header label - visible with data', 'LK Persen': 'header label - visible with data', 'PR Realisa': 'header label - visible with data', 'PR Persen': 'header label - visible with data', 'LK Selisih': 'header label - visible with data', 'PR Selisih': 'header label - visible with data', 'Cluster': 'header label - visible with data', });
lyr_jkt_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});