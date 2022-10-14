$(window).on("load",function(){
    if ($(window).width() > 991) {
        $("._customScrollMagazine").mCustomScrollbar({
            axis:"x"
        });
    } else {
        $("._customScrollMagazine").mCustomScrollbar({
            axis:"y"
        });
    }

});