$(document).ready(function() {
    $(".curtain-left").animate({ width: '0%' }, 2000);
    $(".curtain-right").animate({ width: '0%' }, 2000, function() {
        $(".overlay").fadeIn(500).delay(1000).slideUp(1000, function() {
            $(".content").fadeIn(1000);
        });
    });
});
