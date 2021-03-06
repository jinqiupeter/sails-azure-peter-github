/**
 * Created by peter on 22/03/2017.
 */

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;
// var url = 'mongodb://prediktori4edocumentdb:U04KWGfLEKIOlL1VJhxThiQ9SX9EaN1czCYTpT6fGuuKpeJ7oFKPkKL32J2jWlSsLQnugTMkbrEUHfjEqWHbaQ==@prediktori4edocumentdb.documents.azure.com:10250/AssetRegistry?ssl=true';
//
//

let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');
let url = 'mongodb://prediktori4edocumentdb:U04KWGfLEKIOlL1VJhxThiQ9SX9EaN1czCYTpT6fGuuKpeJ7oFKPkKL32J2jWlSsLQnugTMkbrEUHfjEqWHbaQ==@prediktori4edocumentdb.documents.azure.com:10250/AssetRegistry?ssl=true';


module.exports = {
	pexplotter: (req, res) => {

		let defaultProps = {
			ApplicationPath: "/",
			BackgroundColor: "-4934476",
			BadSymbolImageUrl: "/Prediktor.Dancer.WebApp/images/Error10.gif",
			BadSymbols: "On",
			Bold: "False",
			Border: "True",
			ConnectorName: "Connector1",
			ControlIndex: "0",
			"Database0.0.Y": "EvtLogger",
			DisableRemoveButton: "False",
			FontFile: "Tahoma",
			FontSize: "Medium",
			ForegroundColor: "-657931",
			FractionOfTimespan: "00-00-80-3F",
			GridBehavior: "Static",
			GridColor: "-2894893",
			HDATimeSpan: "6000000000",
			Italic: "True",
			LanguageFileUrl: "/js/pexplotter/i18n/",
			LocalTime: "True",
			LowMemoryWarningLimit: "10",
			MenuSelectedImageUrl: "/images/pexplotter/nike.jpg",
			NumeralFileUrl: "/js/pexplotter/numeral_languages/",
			OneVectorOnly: "False",
			ProcessExplorerURL: "",
			TimeReferenceItemDesc: "",
			TimeReferenceItemID: "",
			TimeReferenceItemUnit: "",
			"TimeReferenceMarkTime.Color": "-16777216",
			"TimeReferenceMarkTime.CurveType": "DEFAULT_CURVE",
			"TimeReferenceMarkTime.MarkTimeOn": "False",
			"TimeReferenceMarkTime.PenSize": "1",
			TimeReferenceRepresentation: "Timestamp",
			Timespan: "60000",
			"Track0.AxisRotation": "Zero",
			"Track0.BackgroundTileFile": "nofile",
			"Track0.BufferRemovePeriod": "1000",
			"Track0.BufferRemoveStrategy": "Remove_Inbetween",
			"Track0.Curve0.BadSymbols": "Default",
			"Track0.Curve0.CenterOnPlot": "False",
			"Track0.Curve0.Color": "-16776961",
			"Track0.Curve0.CurveType": "DEFAULT_CURVE",
			"Track0.Curve0.FollowTimeref": "True",
			"Track0.Curve0.ItemHidden": "False",
			"Track0.Curve0.MarkCurrentPoint": "False",
			"Track0.Curve0.NumDecimals": "0",
			"Track0.Curve0.PenSize": "1",
			"Track0.Curve0.PlotOnePointOnly": "False",
			"Track0.Curve0.PlotType": "Line",
			"Track0.Curve0.SymbolsOnlyOnChange": "False",
			"Track0.Curve0.TimeUpdateIdentifier": "-1",
			"Track0.Curve0.XAxis.AxisLocation": "SOUTH",
			"Track0.Curve0.XAxis.Inverted": "False",
			"Track0.Curve0.XAxis.Logarithmic": "False",
			"Track0.Curve0.XAxis.MarkTime": "False",
			"Track0.Curve0.XAxis.MergeIdentifier": "-1",
			"Track0.Curve0.XAxis.NumDecimals": "-1",
			"Track0.Curve0.XAxis.VisibleRange": "0",
			"Track0.Curve0.XItem.HDAAggregate": "NOAGGREGATE",
			"Track0.Curve0.XItem.HDAStartEndTime": "None",
			"Track0.Curve0.XItem.ResampleInterval": "1.0",
			"Track0.Curve0.XItem.StaticLines.Count": "0",
			"Track0.Curve0.XItemDesc": "",
			"Track0.Curve0.XItemID": "",
			"Track0.Curve0.XItemUnit": "",
			"Track0.Curve0.YAxis.AxisLocation": "SOUTH",
			"Track0.Curve0.YAxis.Inverted": "False",
			"Track0.Curve0.YAxis.Logarithmic": "False",
			"Track0.Curve0.YAxis.MarkTime": "False",
			"Track0.Curve0.YAxis.MergeIdentifier": "-1",
			"Track0.Curve0.YAxis.NumDecimals": "-1",
			"Track0.Curve0.YAxis.VisibleRange": "0",
			"Track0.Curve0.YItem.HDAAggregate": "NOAGGREGATE",
			"Track0.Curve0.YItem.HDAStartEndTime": "None",
			"Track0.Curve0.YItem.ResampleInterval": "1.0",
			"Track0.Curve0.YItem.StaticLines.Count": "0",
			"Track0.Curve0.YItemDesc": "",
			"Track0.Curve0.YItemID": "Worker.Signal2",
			"Track0.Curve0.YItem_CurrentUnitID": "146",
			"Track0.Curve0.YItem_CurrentUnitName": "ft",
			"Track0.Curve0.YItem_UnitID0": "170",
			"Track0.Curve0.YItem_UnitID1": "17",
			"Track0.Curve0.YItem_UnitID2": "146",
			"Track0.Curve0.YItem_UnitID3": "147",
			"Track0.Curve0.YItem_UnitID4": "19",
			"Track0.Curve0.YItem_UnitID5": "18",
			"Track0.Curve0.YItem_UnitID6": "144",
			"Track0.Curve0.YItem_UnitID7": "145",
			"Track0.Curve0.YItem_UnitID8": "16",
			"Track0.Curve0.YItem_UnitID9": "148",
			"Track0.Curve0.YItem_UnitID10": "20",
			"Track0.Curve0.YItem_UnitName0": "br in",
			"Track0.Curve0.YItem_UnitName1": "cm",
			"Track0.Curve0.YItem_UnitName2": "ft",
			"Track0.Curve0.YItem_UnitName3": "in",
			"Track0.Curve0.YItem_UnitName4": "km",
			"Track0.Curve0.YItem_UnitName5": "m",
			"Track0.Curve0.YItem_UnitName6": "mil",
			"Track0.Curve0.YItem_UnitName7": "mile",
			"Track0.Curve0.YItem_UnitName8": "mm",
			"Track0.Curve0.YItem_UnitName9": "nautisk mil",
			"Track0.Curve0.YItem_UnitName10": "nm",
			"Track0.CurveCount": "1",
			"Track0.CurveIndices": "0;",
			"Track0.DescriptionColorAsItem": "false",
			"Track0.DisableAllUserInteraction": "False",
			"Track0.GradientBackground": "False",
			"Track0.ItemNameColorAsItem": "false",
			"Track0.LegendColumnWidths": "",
			"Track0.LegendPosition": "Top",
			"Track0.MergeAxesColorX": "Default",
			"Track0.MergeAxesColorY": "Default",
			"Track0.Minimized": "False",
			"Track0.NumVisibleRowsInLegend": "2",
			"Track0.PlotterType": "TrendViewer",
			"Track0.QualityColorAsItem": "false",
			"Track0.RingBufferSize": "600",
			"Track0.RulerOrientation": "Vertical",
			"Track0.ScrollbarEndPosAutoPan": "False",
			"Track0.ShowXItemInLegend": "True",
			"Track0.UnitColorAsItem": "false",
			"Track0.UseScientificNotation": "False",
			"Track0.ValueColorAsItem": "false",
			"Track0.XAxis.HideAxes": "False",
			"Track0.XAxis.MajorGrid": "3",
			"Track0.XAxis.MergeAllAxes": "True",
			"Track0.XAxis.MinorGrid": "5",
			"Track0.XGridVisible": "True",
			"Track0.YAxis.HideAxes": "False",
			"Track0.YAxis.MajorGrid": "3",
			"Track0.YAxis.MergeAllAxes": "False",
			"Track0.YAxis.MinorGrid": "5",
			"Track0.YGridVisible": "True",
			"Track0.showButton": "true",
			"Track0.showCurveType": "true",
			"Track0.showDateTime": "true",
			"Track0.showDescription": "true",
			"Track0.showName": "true",
			"Track0.showQuality": "false",
			"Track0.showResolution": "true",
			"Track0.showTimespan": "true",
			"Track0.showTimezone": "false",
			"Track0.showUnit": "true",
			"Track0.showValue": "true",
			"Track0.userInteractionAxisScaling": "true",
			"Track0.userInteractionUnitChange": "true",
			TrackCount: "1",
			TrackLayout: "Horizontal",
			UnitEditable: "False",
			VisibleDataPointCount: "-1",
			VisibleDataPointItem: "",
			eventDispatcherId: "PEXPlotter1",
	}
		;

		return res.view('pexplotter/main', {defaultProps});
	},

	readAndWriteXml: (req, res) => {

		new Promise((resolve, reject) => {
			MongoClient.connect(url, function (err, db) {
				if (err) {
					reject(err);
				} else {
					resolve(db);
				}
			});
		})
		.then(db => {
			var cursor =db.collection('Asset01').find({deviceid: 'prediktorI4E'})
			.sort({updatetime:-1}).limit(1);
			return new Promise((resolve, reject) => {
				cursor.each(function(err, device) {
					if (err) {
						reject(err);
					} else {
						resolve(device);
					}
				});
			});
		})
		.then(device => {
			let startingStr = '<DancerData><ConnectorDataNormalized>false</ConnectorDataNormalized><ConnectorData>1	Connector1	false	true	1	10	636257547651023655	8	0	';
			//let random = Math.floor(Math.random() * 1000) + 1;
			//let now = Date.now();
			let timestamp = new Date(device.updatetime).getTime();
			let value = device.value;
			let endingStr = '	0.0.Y	Value	0	192</ConnectorData></DancerData>';
			let daupdate = startingStr + value + "	192	" + timestamp + endingStr

			//db.close();
			res.type('text/xml');
			return res.ok(daupdate);
		})
		.catch(err => {
			sails.log.error("Error finding DeviceID: ", err);
			return res.negotiate(err);
		});


		// MongoClient.connect(url, function(err, db) {
		// 	findDeviceID(db);
		// });

		//DeviceID.findOne({deviceid: 'prediktorI4E'})
		// asset01.find()
		// // .limit(1)
		// // .sort('updatetime DESC')
		// .then(device => {
		// 	let startingStr = '<DancerData><ConnectorDataNormalized>false</ConnectorDataNormalized><ConnectorData>1	Connector1	false	true	1	10	636257547651023655	8	0	';
		// 	//let random = Math.floor(Math.random() * 1000) + 1;
		// 	//let now = Date.now();
		// 	let timestamp = device.updatetime.getTime();
		// 	let value = device.value;
		// 	let endingStr = '	0.0.Y	Value	0	192</ConnectorData></DancerData>';
		// 	let daupdate = startingStr + value + "	192	" + timestamp + endingStr
		//
		// 	res.type('text/xml');
		// 	return res.ok(daupdate);
		// })
		// .catch(err => {
		// 	sails.log.error("Error finding DeviceID: ", err);
		// 	return res.negotiate(err);
		// });

	}
};
