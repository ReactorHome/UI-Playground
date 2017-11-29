// $( document ).ready(function() {
//     $(".card-footer-item").click(function(){
// 		console.log("adding class");
// 		$("#testModel").addClass("is-active");
// 	});
// });

$(function() {
    console.log( "ready!" );

    $(".card-footer-item").click(function(){
		console.log("adding class");
		$("#deviceModel").addClass("is-active");
	});
});

function showAddDeviceModel(){
	$("#addDeviceModel").addClass("is-active");
}

function closeModel(){
	console.log("removing class");

	$("#deviceModel").removeClass("is-active");
	$("#addDeviceModel").removeClass("is-active");
}

