function change_active_page(){

    if(window.location.pathname.indexOf("index.html") != -1) {
        //we are in the index page
        $('[id = "first_nav_item"]').attr("class","nav-link active");
        $('[id = "second_nav_item"]').attr("class","nav-link");
        $('[id = "third_nav_item"]').attr("class","nav-link");
    }else if(window.location.pathname.indexOf("about.html") != -1){
        //we are in the about page
        $('[id = "first_nav_item"]').attr("class","nav-link");
        $('[id = "second_nav_item"]').attr("class","nav-link active");
        $('[id = "third_nav_item"]').attr("class","nav-link");
    }else if(window.location.pathname.indexOf("contacts.html") != -1){
        //we are in the contact page
        $('[id = "first_nav_item"]').attr("class","nav-link");
        $('[id = "second_nav_item"]').attr("class","nav-link");
        $('[id = "third_nav_item"]').attr("class","nav-link active");
    }
}