// ==UserScript==
// @name         Scribd Blur Cleaner
// @namespace    https://pl.scribd.com/
// @version      0.2
// @description  enter something useful
// @author       Larhard
// @match        https://pl.scribd.com/doc/*
// @grant        none
// ==/UserScript==

$(".read_mode_btn").click(
    function() {
        $("#global_header").css("display", "none")
        $("#doc_toolbar").css("display", "none")
        $(".autogen_class_views_shared_my_library_reading_threshold").css("display", "none")
        $(".toolbar_spacer").css("display", "none")
        $(".document_activity").css("display", "none")
        $("footer_documents").css("display", "none")
        $("#global_footer").css("display", "none")
        $(".autogen_class_views_read2_lists_latest_user_docs").css("display", "none")
        $("#doc_info").css("display", "none")
        
        
    }
)

setInterval(
    function(){
        $("[unselectable]").removeAttr("unselectable")
        $(".autogen_class_views_read2_page_blur_promo").css("display", "none")
        $(".text_layer").css("color", "").css("text-shadow", "")
        $("img.absimg").css("opacity", "")
        $(".page_missing_explanation").css("display", "none")
    },
    5000
)
