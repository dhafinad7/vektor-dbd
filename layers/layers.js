var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_kelurahanpasirkaliki_1 = new ol.format.GeoJSON();
var features_kelurahanpasirkaliki_1 = format_kelurahanpasirkaliki_1.readFeatures(json_kelurahanpasirkaliki_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelurahanpasirkaliki_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelurahanpasirkaliki_1.addFeatures(features_kelurahanpasirkaliki_1);
var lyr_kelurahanpasirkaliki_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelurahanpasirkaliki_1, 
                style: style_kelurahanpasirkaliki_1,
                popuplayertitle: "kelurahan pasirkaliki",
                interactive: true,
                title: '<img src="styles/legend/kelurahanpasirkaliki_1.png" /> kelurahan pasirkaliki'
            });
var format_BufferedDhafina_2 = new ol.format.GeoJSON();
var features_BufferedDhafina_2 = format_BufferedDhafina_2.readFeatures(json_BufferedDhafina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BufferedDhafina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BufferedDhafina_2.addFeatures(features_BufferedDhafina_2);
var lyr_BufferedDhafina_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BufferedDhafina_2, 
                style: style_BufferedDhafina_2,
                popuplayertitle: "Buffered Dhafina",
                interactive: true,
                title: '<img src="styles/legend/BufferedDhafina_2.png" /> Buffered Dhafina'
            });
var format_tugasvectorc_3 = new ol.format.GeoJSON();
var features_tugasvectorc_3 = format_tugasvectorc_3.readFeatures(json_tugasvectorc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tugasvectorc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tugasvectorc_3.addFeatures(features_tugasvectorc_3);
var lyr_tugasvectorc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tugasvectorc_3, 
                style: style_tugasvectorc_3,
                popuplayertitle: "tugas vector c",
                interactive: true,
                title: '<img src="styles/legend/tugasvectorc_3.png" /> tugas vector c'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_kelurahanpasirkaliki_1.setVisible(true);lyr_BufferedDhafina_2.setVisible(true);lyr_tugasvectorc_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_kelurahanpasirkaliki_1,lyr_BufferedDhafina_2,lyr_tugasvectorc_3];
lyr_kelurahanpasirkaliki_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BufferedDhafina_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_tugasvectorc_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kelurahanpasirkaliki_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BufferedDhafina_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_tugasvectorc_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_kelurahanpasirkaliki_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BufferedDhafina_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tugasvectorc_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_tugasvectorc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});