// JavaScript Document
var length = 3;                //the total number of web pages

var page_tray = new Array();  //an array to hold the page name and the file name

//Load page information into the array
function load_page() {
   page_tray[0] = new Array(2);
   page_tray[0]['name'] = "Home";
   page_tray[0]['file'] = "home.html";
   page_tray[1] = new Array(2);
   page_tray[1]['name'] = "About";
   page_tray[1]['file'] = "about.html";
   page_tray[2] = new Array(2);
   page_tray[2]['name'] = "Contact";
   page_tray[2]['file'] = "contact.html";
   }

//Write the HTML menu code 
function display_menu()
{
 //Load the page information
 load_page();
 
 //Construct list
 var strList=""; 
 strList += "<ul class=\"menu\">";
 
  //This loop is executed to diplay menu items
  for (i=0; i<length;  i++)
  {
strList += "<li><a href=\"" + page_tray[i]['file'] + "\">" + page_tray[i]['name'] + "</a></li>";
  }
 
strList += "</ul>";
document.write(strList);
}
