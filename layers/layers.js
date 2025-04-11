var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Places_of_Worship_1 = new ol.format.GeoJSON();
var features_Places_of_Worship_1 = format_Places_of_Worship_1.readFeatures(json_Places_of_Worship_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Places_of_Worship_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Places_of_Worship_1.addFeatures(features_Places_of_Worship_1);
var lyr_Places_of_Worship_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Places_of_Worship_1, 
                style: style_Places_of_Worship_1,
                popuplayertitle: 'Places_of_Worship',
                interactive: true,
                title: '<img src="styles/legend/Places_of_Worship_1.png" /> Places_of_Worship'
            });
var format_Worcester_Public_Schools__Facilities_2 = new ol.format.GeoJSON();
var features_Worcester_Public_Schools__Facilities_2 = format_Worcester_Public_Schools__Facilities_2.readFeatures(json_Worcester_Public_Schools__Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Worcester_Public_Schools__Facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Worcester_Public_Schools__Facilities_2.addFeatures(features_Worcester_Public_Schools__Facilities_2);
var lyr_Worcester_Public_Schools__Facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Worcester_Public_Schools__Facilities_2, 
                style: style_Worcester_Public_Schools__Facilities_2,
                popuplayertitle: 'Worcester_Public_Schools__Facilities',
                interactive: true,
                title: '<img src="styles/legend/Worcester_Public_Schools__Facilities_2.png" /> Worcester_Public_Schools__Facilities'
            });
var format_WorcesterPublicArtFROMTHEARCHIVES_3 = new ol.format.GeoJSON();
var features_WorcesterPublicArtFROMTHEARCHIVES_3 = format_WorcesterPublicArtFROMTHEARCHIVES_3.readFeatures(json_WorcesterPublicArtFROMTHEARCHIVES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorcesterPublicArtFROMTHEARCHIVES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorcesterPublicArtFROMTHEARCHIVES_3.addFeatures(features_WorcesterPublicArtFROMTHEARCHIVES_3);
var lyr_WorcesterPublicArtFROMTHEARCHIVES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorcesterPublicArtFROMTHEARCHIVES_3, 
                style: style_WorcesterPublicArtFROMTHEARCHIVES_3,
                popuplayertitle: 'Worcester Public Art — FROM THE ARCHIVES',
                interactive: true,
                title: '<img src="styles/legend/WorcesterPublicArtFROMTHEARCHIVES_3.png" /> Worcester Public Art — FROM THE ARCHIVES'
            });
var format_WorcesterPublicArtPUBLICART_4 = new ol.format.GeoJSON();
var features_WorcesterPublicArtPUBLICART_4 = format_WorcesterPublicArtPUBLICART_4.readFeatures(json_WorcesterPublicArtPUBLICART_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorcesterPublicArtPUBLICART_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorcesterPublicArtPUBLICART_4.addFeatures(features_WorcesterPublicArtPUBLICART_4);
var lyr_WorcesterPublicArtPUBLICART_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorcesterPublicArtPUBLICART_4, 
                style: style_WorcesterPublicArtPUBLICART_4,
                popuplayertitle: 'Worcester Public Art — PUBLIC ART',
                interactive: true,
                title: '<img src="styles/legend/WorcesterPublicArtPUBLICART_4.png" /> Worcester Public Art — PUBLIC ART'
            });
var format_dfg_5 = new ol.format.GeoJSON();
var features_dfg_5 = format_dfg_5.readFeatures(json_dfg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dfg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dfg_5.addFeatures(features_dfg_5);
var lyr_dfg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dfg_5, 
                style: style_dfg_5,
                popuplayertitle: 'dfg',
                interactive: true,
                title: 'dfg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Places_of_Worship_1.setVisible(true);lyr_Worcester_Public_Schools__Facilities_2.setVisible(true);lyr_WorcesterPublicArtFROMTHEARCHIVES_3.setVisible(true);lyr_WorcesterPublicArtPUBLICART_4.setVisible(true);lyr_dfg_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Places_of_Worship_1,lyr_Worcester_Public_Schools__Facilities_2,lyr_WorcesterPublicArtFROMTHEARCHIVES_3,lyr_WorcesterPublicArtPUBLICART_4,lyr_dfg_5];
lyr_Places_of_Worship_1.set('fieldAliases', {'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'GEOG_CITY': 'GEOG_CITY', 'ZIPCODE': 'ZIPCODE', 'TELEPHONE': 'TELEPHONE', 'EMAIL': 'EMAIL', 'WEBSITE': 'WEBSITE', 'MAIL_ADDR': 'MAIL_ADDR', 'LEADERSHIP': 'LEADERSHIP', 'YEAR_EST': 'YEAR_EST', 'DENOM': 'DENOM', 'ORG': 'ORG', 'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'MAD_ID': 'MAD_ID', });
lyr_Worcester_Public_Schools__Facilities_2.set('fieldAliases', {'FACILITY_NAME': 'FACILITY_NAME', 'FACILITY_ADDRESS': 'FACILITY_ADDRESS', 'CLASSIFICATION': 'CLASSIFICATION', 'ZIPCODE': 'ZIPCODE', 'MBL': 'MBL', 'QUADRANT': 'QUADRANT', 'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'Contributing_Artist': 'Contributing_Artist', 'Type': 'Type', 'Date_Completed': 'Date_Completed', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Location': 'Location', 'District': 'District', 'More_Information': 'More_Information', 'gx_media_links': 'gx_media_links', });
lyr_WorcesterPublicArtPUBLICART_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'Contributing_Artist': 'Contributing_Artist', 'Type': 'Type', 'Date_Completed': 'Date_Completed', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Location': 'Location', 'District': 'District', 'More_Information': 'More_Information', 'gx_media_links': 'gx_media_links', });
lyr_dfg_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam. Maker': 'Cam. Maker', 'Cam. Model': 'Cam. Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', 'Link': 'Link', 'Description': 'Description', });
lyr_Places_of_Worship_1.set('fieldImages', {'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'GEOG_CITY': 'TextEdit', 'ZIPCODE': 'TextEdit', 'TELEPHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'WEBSITE': 'TextEdit', 'MAIL_ADDR': 'TextEdit', 'LEADERSHIP': 'TextEdit', 'YEAR_EST': 'TextEdit', 'DENOM': 'TextEdit', 'ORG': 'TextEdit', 'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'MAD_ID': 'TextEdit', });
lyr_Worcester_Public_Schools__Facilities_2.set('fieldImages', {'FACILITY_NAME': 'TextEdit', 'FACILITY_ADDRESS': 'TextEdit', 'CLASSIFICATION': 'TextEdit', 'ZIPCODE': 'TextEdit', 'MBL': 'TextEdit', 'QUADRANT': 'TextEdit', 'OBJECTID': 'Range', 'GlobalID': 'TextEdit', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'Contributing_Artist': 'TextEdit', 'Type': 'TextEdit', 'Date_Completed': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Location': 'TextEdit', 'District': 'TextEdit', 'More_Information': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_WorcesterPublicArtPUBLICART_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ID': 'TextEdit', 'Contributing_Artist': 'TextEdit', 'Type': 'TextEdit', 'Date_Completed': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Location': 'TextEdit', 'District': 'TextEdit', 'More_Information': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_dfg_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam. Maker': 'TextEdit', 'Cam. Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'DateTime', 'Images': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_Places_of_Worship_1.set('fieldLabels', {'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'GEOG_CITY': 'no label', 'ZIPCODE': 'no label', 'TELEPHONE': 'no label', 'EMAIL': 'no label', 'WEBSITE': 'no label', 'MAIL_ADDR': 'no label', 'LEADERSHIP': 'no label', 'YEAR_EST': 'no label', 'DENOM': 'no label', 'ORG': 'no label', 'TYPE': 'no label', 'SOURCE': 'no label', 'MAD_ID': 'no label', });
lyr_Worcester_Public_Schools__Facilities_2.set('fieldLabels', {'FACILITY_NAME': 'no label', 'FACILITY_ADDRESS': 'no label', 'CLASSIFICATION': 'no label', 'ZIPCODE': 'no label', 'MBL': 'no label', 'QUADRANT': 'no label', 'OBJECTID': 'no label', 'GlobalID': 'no label', });
lyr_WorcesterPublicArtFROMTHEARCHIVES_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'Contributing_Artist': 'no label', 'Type': 'no label', 'Date_Completed': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Location': 'no label', 'District': 'no label', 'More_Information': 'no label', 'gx_media_links': 'no label', });
lyr_WorcesterPublicArtPUBLICART_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'Contributing_Artist': 'no label', 'Type': 'no label', 'Date_Completed': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Location': 'no label', 'District': 'no label', 'More_Information': 'no label', 'gx_media_links': 'no label', });
lyr_dfg_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'Name': 'no label', 'Date': 'no label', 'Time': 'no label', 'Lon': 'no label', 'Lat': 'no label', 'Altitude': 'no label', 'North': 'no label', 'Azimuth': 'no label', 'Cam. Maker': 'no label', 'Cam. Model': 'no label', 'Title': 'no label', 'Comment': 'no label', 'Path': 'no label', 'RelPath': 'no label', 'Timestamp': 'no label', 'Images': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_dfg_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});