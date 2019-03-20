$(document).ready(function() {
    var navbar = "#navbar_code";
    $(navbar).load("../navbar.html",function() {
        change_active_page();
    }); //load the navbar code
}); 
