window.onload = function onload() {
	$("#ButtonFour").prop('disabled', true);
	$("#reply-text").hide()
	if(window.innerWidth < 576){
	$("#ButtonOne").addClass("mobile btn-sm")
	$("#ButtonTwo").addClass("mobile btn-sm")
	$("#ButtonTwo").addClass("mobile btn-sm")
	$("#ButtonThree").addClass("mobile btn-sm")
	$("#ButtonFour").addClass("mobile btn-sm")
	}
	if(window.innerWidth > 576){
	$("#ButtonOne").addClass("desktop")
	$("#ButtonTwo").addClass("desktop")
	$("#ButtonTwo").addClass("desktop")
	$("#ButtonThree").addClass("desktop")
	$("#ButtonFour").addClass("desktop")
	}
	text();
}
//Replies
function reply1() {
	if (path == 0){
		$("#reply-text").html(scenarios0[count].reply1);
	}
	if (path == 1){
		$("#reply-text").html(scenarios1[count].reply1);
	}
	if (path == 2){
		$("#reply-text").html(scenarios2[count].reply1);
	}
	if (path == 3){
		$("#reply-text").html(scenarios3[count].reply1);
	}
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
}
function reply2() {
	if (path == 0){
		$("#reply-text").html(scenarios0[count].reply2);
	}
	if (path == 1){
		$("#reply-text").html(scenarios1[count].reply2);
	}
	if (path == 2){
		$("#reply-text").html(scenarios2[count].reply2);
	}
	if (path == 3){
		$("#reply-text").html(scenarios3[count].reply2);
	}
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonThree").prop('disabled', true);
}
function reply3() {
	if (path == 0){
		$("#reply-text").html(scenarios0[count].reply3);
	}
	if (path == 1){
		$("#reply-text").html(scenarios1[count].reply3);
	}
	if (path == 2){
		$("#reply-text").html(scenarios2[count].reply3);
	}
	if (path == 3){
		$("#reply-text").html(scenarios3[count].reply3);
	}
	$("#reply-text").show();
	$("#ButtonFour").prop('disabled', false);
	$("#ButtonOne").prop('disabled', true);
	$("#ButtonTwo").prop('disabled', true);
}
	
	//Next scenario
function next_scenario(mult) {
    count++;
	$("#reply-text").hide();
	$("#ButtonOne").prop('disabled', false);
	$("#ButtonTwo").prop('disabled', false);
	$("#ButtonThree").prop('disabled', false);
	$("#ButtonFour").prop('disabled', true);
    text();
}