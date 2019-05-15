var pos = 0;
var slideshows_pos = {
    "inf_war_slideshow": 0,
    "split_slideshow": 0,
    "mad_max_slideshow": 0,
    "revenant_slideshow": 0
};


function next(slideshow){
    pos = slideshows_pos[slideshow];
    pos+=1;
    if(pos>2){
        pos = 0;
    }

    change_image(pos,slideshow);

    slideshows_pos[slideshow] = pos;

}

function prev(slideshow){
    pos = slideshows_pos[slideshow];
    pos-=1;
    if(pos<0){
        pos = 2;
    }
    
    change_image(pos,slideshow);

    slideshows_pos[slideshow] = pos;
}

function change_image(position, slshow_name){
    $("."+slshow_name + " > div").fadeOut(1000);
    $("."+slshow_name + " > #"+slshow_name+position).fadeIn(1000);
}