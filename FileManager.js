var fs = require('fs');
var parseString = require('xml2js').parseString;
var xml2js = require('xml2js');
class FileManager{

	constructor (filename,dateStamp,trackData){
		var fileManager = this;
		fileManager.filename = filename;
		fileManager.xmlVersion = `<?xml version="1.0" encoding="UTF-8"?>`;
		fileManager.body = {
			'gpx': {
				'$' :{
						'creator':"StravaGPX",
						'version':"1.1",
						'xmlns':"http://www.topografix.com/GPX/1/1",
		                'xmlns:xsi':"http://www.w3.org/2001/XMLSchema-instance",
		                'xsi:schemaLocation':"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd",
						'xmlns:gpxtpx':"http://www.garmin.com/xmlschemas/TrackPointExtension/v1",
						'xmlns:gpxx':"http://www.garmin.com/xmlschemas/GpxExtensions/v3"
				},
				'metadata':{
					'time': dateStamp
				},
				'trk':{
					'name' : "GoTouch GPX v1",
					'trkseg': trackData
				}
			}
		};
		
		fileManager.builder = new xml2js.Builder();
        var xmlBody = fileManager.builder.buildObject(fileManager.body);
		fs.writeFile(fileManager.filename, xmlBody, function (err) {
  			if (err) throw err;
  			console.log('Created File: ', fileManager.filename);
  		});
	}

}
module.exports = FileManager;




