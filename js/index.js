$(document).ready(function(){
    $(".services-list__visible-content").click(function() {
        $(this).siblings(".services-list__hidden-content").toggle(500);

        if($(this).children(".services-list__see-more").hasClass("services-list__see-more-closed")){
            $(this).children(".services-list__see-more").removeClass("services-list__see-more-closed")
        } else {
            $(this).children(".services-list__see-more").addClass(" services-list__see-more-closed")
        }

        if($(this).find(".services-list__cross").hasClass("opened")){
            $(this).find(".services-list__cross").addClass("closed")
            $(this).find(".services-list__cross").removeClass("opened")
        } else {
            $(this).find(".services-list__cross").addClass("opened")
            $(this).find(".services-list__cross").removeClass("closed")
        }
    })
});