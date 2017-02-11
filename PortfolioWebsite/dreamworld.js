var Image = new Array ("slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.jpg");
var Image_Number = 0;
var Image_Length = Image.length - 1;

function auto(){
	setInterval("change_image(1)", 3000);
	}

function change_image(num) {
Image_Number = Image_Number + num;

if (Image_Number > Image_Length){
	Image_Number = 0;
	}
if (Image_Number < 0){
	Image_Number = Image_Length;
	}	
	document.slideshow.src = Image[Image_Number];
	var radio = document.forms[num].checked;
	return false;
}

function load_slide1(){
	document.slideshow.src = "slide1.jpg";
	} 
	
function load_slide2(){
	document.slideshow.src ="slide2.jpg";
	} 

function load_slide3(){
	document.slideshow.src ="slide3.jpg";
}
	
function load_slide4(){
	document.slideshow.src ="slide4.jpg";	
}// JavaScript Document