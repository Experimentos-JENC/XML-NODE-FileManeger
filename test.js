const FileManager = require('./FileManager.js');
/*
	<trkpt lat="38.4340980" lon="-122.7151630">
    <ele>48.0</ele>
    <time>2016-08-28T13:03:35Z</time>
    <extensions>
     <gpxtpx:TrackPointExtension>
      <gpxtpx:hr>112</gpxtpx:hr>
      <gpxtpx:cad>92</gpxtpx:cad>
     </gpxtpx:TrackPointExtension>
    </extensions>
   </trkpt>
*/


var trackData = [
	{
	'trkpt':{
		'$': {
			'lat':'38.4340980',
			'lon':'-122.7151630'
		},
		'ele': 48.0,
		'time' : '2016-08-28T13:03:35Z',
		'extensions':{
			'gpxtpx:TrackPointExtension':{
				'gpxtpx:hr':112,
      			'gpxtpx:cad':92
			}
		} 
	}
},
{
	'trkpt':{
		'$': {
			'lat':'38.4340980',
			'lon':'-122.7151630'
		},
		'ele': 48.0,
		'time' : '2016-08-28T13:03:35Z',
		'extensions':{
			'gpxtpx:TrackPointExtension':{
				'gpxtpx:hr':112,
      			'gpxtpx:cad':92
			}
		} 
	}
}

];

var fm = new FileManager('test2.xml','2016-08-28T13:03:35Z',trackData);
