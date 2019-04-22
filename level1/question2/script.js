var data = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}

var output = "";

for (var i = 0; i <= data.video.length; i++) {
	for (key in data.video[i]) {
		if (data.video[i].hasOwnProperty(key)) {
			console.log(output + data.video[i][key]);
		}
	}
}

var output2 = "";

for (var i = 0; i <= data['video'][0]['author'].data.length; i++) {
	for (key in data['video'][0]['author'].data[i]) {
		if (data['video'][0]['author'].data[i].hasOwnProperty(key)) {
			console.log(output2 + data['video'][0]['author'].data[i][key]);
		}
	}
}
