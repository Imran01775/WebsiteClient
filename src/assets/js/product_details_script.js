$(document).ready(function () {
    $('#ex1').zoom({ magnify :1.5});
});


$(".deal-detail-thumbnel-image").click(function (event) {
    var currentImgSrc = $(this).find("img").attr("src");
    var zoomIngSrc = $("#ex1").find("img").attr("src");

    $("#ex1").find("img").attr("src", currentImgSrc);
    $("#ex1").find("img").attr("data-zoom-image", currentImgSrc);
    $(this).find("img").attr("src", zoomIngSrc);
});


function activateMe(id) {
    var findActiveDetailsId = $(".tab-content").find(".active-tab-text-color").attr("id");
    $("#details-" + findActiveDetailsId).css("display", "none");
    $(".tab-content").find(".active-tab").removeClass("active-tab").find(".active-tab-text-color").removeClass("active-tab-text-color");
    $("#" + id).addClass("active-tab-text-color").parent().addClass("active-tab");
    $("#details-" + id).css("display", "block");
}


function increaseMe() {
    var existingVal = $(".qty").text();
    if (parseInt(existingVal) < 3)
    {
        $(".qty").text(parseInt(existingVal) + 1);
    }
}

function decreaseMe() {
    var existingVal = $(".qty").text();
    if (parseInt(existingVal) > 1) {
        $(".qty").text(parseInt(existingVal) - 1);
    }
}