function change_carousel_img(first_img_src, second_img_src, third_img_src, movie) {
    var car_first_img_id = movie+"_carousel_first_img";
    var car_second_img_id = movie+"_carousel_second_img";
    var car_third_img_id = movie+"_carousel_third_img";

    var car_id = movie+"_carousel_id";

    $("#custom_carousel").attr("id",car_id);
    $("#custom_carousel_prev").attr("href","#"+car_id);
    $("#custom_carousel_next").attr("href","#"+car_id);

    alert($("#"+car_id).attr("id"));
    alert($("#custom_carousel_prev").attr("href"));
    alert($("#custom_carousel_next").attr("href"));

    $("#carousel_first_img").attr("id",car_first_img_id);
    $("#carousel_second_img").attr("id",car_second_img_id);
    $("#carousel_third_img").attr("id",car_third_img_id);
    
    $("#"+car_first_img_id).attr("src", first_img_src);
    $("#"+car_second_img_id).attr("src", second_img_src);
    $("#"+car_third_img_id).attr("src", third_img_src);
}

//toq js file e pulna mizeriq