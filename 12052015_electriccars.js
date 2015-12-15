var xx = jQuery;

	
var numberWithCommas = d3.format(",");

dataJSON = [
  {
    "ID":389,
    "Town":"AUBURN",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":113,
    "Town":"ARUNDEL",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":261,
    "Town":"AUGUSTA",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":431,
    "Town":"BANGOR",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":160,
    "Town":"BATH",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":210,
    "Town":"BELGRADE",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":816,
    "Town":"BERWICK",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":29,
    "Town":"BOWDOIN",
    "leafs":1,
    "teslas":null,
    "bmws":1
  },
  {
    "ID":236,
    "Town":"BRUNSWICK",
    "leafs":5,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":233,
    "Town":"CAPE ELIZABETH",
    "leafs":2,
    "teslas":5,
    "bmws":2
  },
  {
    "ID":417,
    "Town":"CASCO",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":126,
    "Town":"CUMBERLAND",
    "leafs":5,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":861,
    "Town":"CUSHING",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":12,
    "Town":"DAMARISCOTTA",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":13,
    "Town":"FALMOUTH",
    "leafs":4,
    "teslas":4,
    "bmws":null
  },
  {
    "ID":398,
    "Town":"FARMINGTON",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":666,
    "Town":"FREEPORT",
    "leafs":null,
    "teslas":2,
    "bmws":null
  },
  {
    "ID":596,
    "Town":"GARDINER",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":422,
    "Town":"GORHAM",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":54,
    "Town":"GRAY",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":26,
    "Town":"HAMPDEN",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":347,
    "Town":"HARPSWELL",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":190,
    "Town":"HOPE",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":390,
    "Town":"KENNEBUNK",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":545,
    "Town":"LEEDS",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":844,
    "Town":"LEWISTON",
    "leafs":3,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":888,
    "Town":"LISBON",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":510,
    "Town":"MANCHESTER",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":793,
    "Town":"MONMOUTH",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":694,
    "Town":"MOUNT DESERT",
    "leafs":1,
    "teslas":null,
    "bmws":1
  },
  {
    "ID":226,
    "Town":"NORTH YARMOUTH",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":320,
    "Town":"NEW GLOUCESTER",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":668,
    "Town":"BRISTOL",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":714,
    "Town":"NEWCASTLE",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":680,
    "Town":"NEWPORT",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":780,
    "Town":"NOBLEBORO",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":51,
    "Town":"NORRIDGEWOCK",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":686,
    "Town":"NORTH BERWICK",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":63,
    "Town":"NORWAY",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":528,
    "Town":"OLD TOWN",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":552,
    "Town":"OLD ORCHARD BEACH",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":228,
    "Town":"ORLAND",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":747,
    "Town":"ORONO",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":572,
    "Town":"OTISFIELD",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":163,
    "Town":"PARSONSFIELD",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":438,
    "Town":"PORTLAND",
    "leafs":16,
    "teslas":4,
    "bmws":3
  },
  {
    "ID":645,
    "Town":"POWNAL",
    "leafs":null,
    "teslas":1,
    "bmws":1
  },
  {
    "ID":184,
    "Town":"RAYMOND",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":512,
    "Town":"ROCKPORT",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":340,
    "Town":"SANFORD",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":665,
    "Town":"SCARBOROUGH",
    "leafs":3,
    "teslas":1,
    "bmws":1
  },
  {
    "ID":369,
    "Town":"SOUTH BERWICK",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":35,
    "Town":"SOUTH BRISTOL",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":418,
    "Town":"SOUTH PORTLAND",
    "leafs":5,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":362,
    "Town":"SOUTHWEST HARBOR",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":523,
    "Town":"STANDISH",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":268,
    "Town":"TOPSHAM",
    "leafs":1,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":380,
    "Town":"TREMONT",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":529,
    "Town":"UNITY",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":471,
    "Town":"VINALHAVEN",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":124,
    "Town":"WALES",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":618,
    "Town":"WASHINGTON",
    "leafs":2,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":47,
    "Town":"WAYNE",
    "leafs":1,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":580,
    "Town":"WEST BATH",
    "leafs":1,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":3,
    "Town":"WESTBROOK",
    "leafs":3,
    "teslas":null,
    "bmws":null
  },
  {
    "ID":533,
    "Town":"WINSLOW",
    "leafs":null,
    "teslas":1,
    "bmws":null
  },
  {
    "ID":145,
    "Town":"YARMOUTH",
    "leafs":null,
    "teslas":null,
    "bmws":1
  },
  {
    "ID":483,
    "Town":"YORK",
    "leafs":null,
    "teslas":2,
    "bmws":null
  }
];


var teslasByTown = d3.map(),
	leafsByTown = d3.map(),
	ithreesByTown = d3.map();

for (var i=0; i<dataJSON.length; i++) {
	teslasByTown.set(dataJSON[i].name, dataJSON[i]['teslas']);
	leafsByTown.set(dataJSON[i].name, dataJSON[i]['leafs']);
	ithreesByTown.set(dataJSON[i].name, dataJSON[i]['bmws']);
} 

var	path = d3.geo.path();


xx(document).ready(function() {

	// scale map to screen size
	var widthME = xx('#mainemap').innerWidth(),
			heightME = (window.innerHeight > widthME) ?  widthME  : widthME * 1,
			horzOffset = (xx('#mainemap').innerWidth() < 550) ? 35 : 20;
				
	var svg = d3.select("#mainemap").append("svg")
		.attr("width", widthME)
		.attr("height", heightME);
	
	svg.append("rect")
			.attr("class", "background1")
			.attr("fill", '#FFF')
			.attr("width", widthME)
			.attr("height", heightME);
			
	var gState = svg.append("g").attr("id", "state");
	var keyState = svg.append('g')
		.attr('class', 'svgKey')
		.attr('width', 160)
		.attr('transform', 'translate(' + (widthME - 180) + ',' + (heightME * 0.9) + ')');
	
	var scale = widthME * 12;
	
	var zoom = function(a) {			// the passed variable is the specific g element on which the zoom transition will act
		jQuery(a).qtip({hide: true })
		return d3.behavior.zoom()
	    .translate([0, 0])
	    .scale(1)
	    .scaleExtent([1, 2])
	    .on("zoom", function() {
	    	zoomed(a);
	    });
  }
  
 	var projection = d3.geo.conicConformal()
					.parallels([29.5, 45.5])
					.rotate([70.58, 1.1])
					.center([-.8,50])
					.scale(scale)
					.translate([0, -scale/40]);
	
	path.projection(projection);	
		
	var qTapped = function(d) {
	xx(this).qtip('destroy');
}

	var qTap = function(d) {
    var thisDistrict = findElement(dataJSON, 'Town', (d.properties.TOWN).toUpperCase());
     xx(this).qtip({
						overwrite: true, // Make sure another tooltip can't overwrite this one without it being explicitly destroyed
						content: {
							title: d.properties.TOWN,
							text: '<table class="tipster"><tr><td class="tipLeft">Nissan Leafs: </td><td class="tipRight">' + (thisDistrict.leafs ? thisDistrict.leafs : 0) +'</td></tr><tr><td class="tipLeft">Teslas: </td><td class="tipRight">' + (thisDistrict.teslas ? thisDistrict.teslas : 0)  + '</td></tr><tr><td class="tipLeft">i-Series BMWs: </td><td class="tipRight">' + (thisDistrict.bmws ? thisDistrict.bmws : 0)  + '</td></tr></table>'
						},
						style: { 
										classes: 'qtip-bootstrap',
										tip: true
						},
						position: {
								my: 'bottom center',
								at: 'top center',
								target: 'mouse'
						},
						show: {
							event: 'click',
							ready: true // Needed to make it show on first mouseover event
						}
    	}).on('scroll', function (e){ xx(this).qtip('hide'); });
}


 d3.json('http://specialprojects.pressherald.com/topojson/me-towns-2014.json', function(error, me) {
//	d3.json('me-towns-2014.json', function(error, me) { 	 	
		searchJSON = [];
		
		var counties = gState.append("path")
			.datum(topojson.mesh(me, me.objects.towns, function(a, b) { return a.properties.COUNTY !== b.properties.COUNTY; }))
   .attr("class", "counties")
   .attr("d", path);
		
		gState.append('path')
      .datum(topojson.mesh(me, me.objects.towns, function(a, b) { return a === b; }))
      .attr("class", "state")
      .attr("d", path);
		
		gState.selectAll()
				.data(topojson.feature(me, me.objects.towns).features)
				.enter()
				.append('circle')
				.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
				.attr('class', function(d) {
					var obj = {};
					obj.name = d.properties.COUNTY;
					obj.label = d.properties.TOWN;
					obj.FID = d.properties.FID;
					searchJSON.push(obj);
			
					var thisDistrict = findElement(dataJSON, 'ID', d.properties.FID);
					return 'svgTown';
				})
				.attr('r', function(d) {
					var thisTown = findElement(dataJSON, 'ID', d.properties.FID);
					var rad = 0;
					if (thisTown != 'none') {
						//var thisWin = thisItem.properties[0].compare.indexOf(thisTown.winner);
						var teslas = thisTown.teslas;
						var leafs = thisTown.leafs;
						var bmws = thisTown.bmws;
						rad = Math.sqrt(teslas+leafs+bmws)*2;
					}
					return rad;
				
				})	
				.on('mouseover', function(d) { qTap(d); })
				.on('mouseleave', function(d) { qTapped(d); })
		});

	xx("#zoomportland").on('click touchstart', function() {
		jQuery(this).addClass("active").siblings().removeClass("active");
		//	Larger negative numbers in the translation array move the map further left and up relative to the frame. First number is x-axis.
		svg.transition().duration(750).call(zoom(gState).scale(2).translate([-40,-heightME*1.2]).event);
		gState.selectAll('circle')
			.attr('class','zoomed')
			.attr('r', function(d) {
				var thisTown = findElement(dataJSON, 'ID', d.properties.FID);
				var rad = 0;
				if (thisTown != 'none') {
					//var thisWin = thisItem.properties[0].compare.indexOf(thisTown.winner);
					var teslas = thisTown.teslas;
					var leafs = thisTown.leafs;
					var bmws = thisTown.bmws;
					rad = Math.sqrt(teslas+leafs+bmws)*1.2;
				}
				return rad;
			});
	});

	jQuery("#zoomreset").on('click touchstart', function() {
		jQuery(this).addClass("active").siblings().removeClass("active");
		gState.selectAll('circle')
			.attr('class','zoomed')
			.attr('r', function(d) {
				var thisTown = findElement(dataJSON, 'ID', d.properties.FID);
				var rad = 0;
				if (thisTown != 'none') {
					//var thisWin = thisItem.properties[0].compare.indexOf(thisTown.winner);
					var teslas = thisTown.teslas;
					var leafs = thisTown.leafs;
					var bmws = thisTown.bmws;
					rad = Math.sqrt(teslas+leafs+bmws)*2;
				}
				return rad;
			});
		svg.transition().duration(750).call(zoom(gState).translate([0,0]).scale(1.0).event);
	});

});

function zoomed(g) {
  g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function findElement(arr, propName, propValue) {
	var returnVal = 'none';
	for (var i=0; i < arr.length; i++) {
		if (arr[i][propName] == propValue) {
      		returnVal = arr[i];
    	}
	} 
	return returnVal;
}

function numberWithCommas(x) {
    if (typeof x !== 'undefined') {
    	var parts = x.toString().split(".");
    	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    	return parts.join(".");
    } else {
    	return(x);
    }
}

function toPascalCase(str) {
    var arr = str.split(/\s|_/);
    for(var i=0,l=arr.length; i<l; i++) {
        arr[i] = arr[i].substr(0,1).toUpperCase() + 
                 (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    }
    return arr.join(" ");
}


