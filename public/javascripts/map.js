$(document).ready(function() {
	$("#container-map1").height($("#container-map1").width()*0.47);
	var map = new AMap.Map('container-map1',{
        zoom: 8,
        center: [105.39,30.0]
    });
});