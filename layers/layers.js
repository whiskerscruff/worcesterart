var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ddssss_1 = new ol.format.GeoJSON();
var features_ddssss_1 = format_ddssss_1.readFeatures(json_ddssss_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ddssss_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ddssss_1.addFeatures(features_ddssss_1);
var lyr_ddssss_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ddssss_1, 
                style: style_ddssss_1,
                popuplayertitle: 'ddssss',
                interactive: true,
                title: '<img src="styles/legend/ddssss_1.png" /> ddssss'
            });
var format_WorcesterPublicArtFROMTHEARCHIVES_2 = new ol.format.GeoJSON();
var features_WorcesterPublicArtFROMTHEARCHIVES_2 = format_WorcesterPublicArtFROMTHEARCHIVES_2.readFeatures(json_WorcesterPublicArtFROMTHEARCHIVES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorcesterPublicArtFROMTHEARCHIVES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorcesterPublicArtFROMTHEARCHIVES_2.addFeatures(features_WorcesterPublicArtFROMTHEARCHIVES_2);
var lyr_WorcesterPublicArtFROMTHEARCHIVES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorcesterPublicArtFROMTHEARCHIVES_2, 
                style: style_WorcesterPublicArtFROMTHEARCHIVES_2,
                popuplayertitle: 'Worcester Public Art — FROM THE ARCHIVES',
                interactive: true,
                title: '<img src="styles/legend/WorcesterPublicArtFROMTHEARCHIVES_2.png" /> Worcester Public Art — FROM THE ARCHIVES'
            });
var format_WorcesterPublicArtPUBLICART_3 = new ol.format.GeoJSON();
var features_WorcesterPublicArtPUBLICART_3 = format_WorcesterPublicArtPUBLICART_3.readFeatures(json_WorcesterPublicArtPUBLICART_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorcesterPublicArtPUBLICART_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorcesterPublicArtPUBLICART_3.addFeatures(features_WorcesterPublicArtPUBLICART_3);
var lyr_WorcesterPublicArtPUBLICART_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorcesterPublicArtPUBLICART_3, 
                style: style_WorcesterPublicArtPUBLICART_3,
                popuplayertitle: 'Worcester Public Art — PUBLIC ART',
                interactive: true,
                title: '<img src="styles/legend/WorcesterPublicArtPUBLICART_3.png" /> Worcester Public Art — PUBLIC ART'
            });
var format_ArtifaktMuralsWorcesterMA_4 = new ol.format.GeoJSON();
var features_ArtifaktMuralsWorcesterMA_4 = format_ArtifaktMuralsWorcesterMA_4.readFeatures(json_ArtifaktMuralsWorcesterMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArtifaktMuralsWorcesterMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtifaktMuralsWorcesterMA_4.addFeatures(features_ArtifaktMuralsWorcesterMA_4);
var lyr_ArtifaktMuralsWorcesterMA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtifaktMuralsWorcesterMA_4, 
                style: style_ArtifaktMuralsWorcesterMA_4,
                popuplayertitle: 'Artifakt Murals — Worcester, MA',
                interactive: true,
                title: '<img src="styles/legend/ArtifaktMuralsWorcesterMA_4.png" /> Artifakt Murals — Worcester, MA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ddssss_1.setVisible(true);lyr_WorcesterPublicArtFROMTHEARCHIVES_2.setVisible(true);lyr_WorcesterPublicArtPUBLICART_3.setVisible(true);lyr_ArtifaktMuralsWorcesterMA_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ddssss_1,lyr_WorcesterPublicArtFROMTHEARCHIVES_2,lyr_WorcesterPublicArtPUBLICART_3,lyr_ArtifaktMuralsWorcesterMA_4];
lyr_ddssss_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', 'Link': 'Link', 'Description': 'Description', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'Contributing_Artist': 'Contributing_Artist', 'Type': 'Type', 'Date_Completed': 'Date_Completed', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Location': 'Location', 'District': 'District', 'More_Information': 'More_Information', 'gx_media_links': 'gx_media_links', });
lyr_WorcesterPublicArtPUBLICART_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'Contributing_Artist': 'Contributing_Artist', 'Type': 'Type', 'Date_Completed': 'Date_Completed', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Location': 'Location', 'District': 'District', 'More_Information': 'More_Information', 'gx_media_links': 'gx_media_links', });
lyr_ArtifaktMuralsWorcesterMA_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_links': 'gx_media_links', });
lyr_ddssss_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'DateTime', 'Images': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'Contributing_Artist': 'TextEdit', 'Type': 'TextEdit', 'Date_Completed': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Location': 'TextEdit', 'District': 'TextEdit', 'More_Information': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_WorcesterPublicArtPUBLICART_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'Contributing_Artist': 'TextEdit', 'Type': 'TextEdit', 'Date_Completed': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Location': 'TextEdit', 'District': 'TextEdit', 'More_Information': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_ArtifaktMuralsWorcesterMA_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_ddssss_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'no label', 'Date': 'no label', 'Time': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Altitude': 'no label', 'North': 'no label', 'Azimuth': 'no label', 'Cam. Maker': 'no label', 'Cam. Model': 'no label', 'Title': 'no label', 'Comment': 'no label', 'Path': 'no label', 'RelPath': 'no label', 'Timestamp': 'no label', 'Images': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'Contributing_Artist': 'no label', 'Type': 'no label', 'Date_Completed': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Location': 'no label', 'District': 'no label', 'More_Information': 'no label', 'gx_media_links': 'no label', });
lyr_WorcesterPublicArtPUBLICART_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'Contributing_Artist': 'no label', 'Type': 'no label', 'Date_Completed': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Location': 'no label', 'District': 'no label', 'More_Information': 'no label', 'gx_media_links': 'no label', });
lyr_ArtifaktMuralsWorcesterMA_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_links': 'no label', });
lyr_ArtifaktMuralsWorcesterMA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});