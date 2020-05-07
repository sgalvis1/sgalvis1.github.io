//Using jquery

// Menu blur function
$(function () { // Same as document.addEventListener("DOMContentLoaded")

    $("#navBarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        function closeBar() {
            if (screenWidth < 769) {
                $("#navbarNav").collapse('hide');
            }
        };
        setTimeout(closeBar, 500);
    });
});

// Sigle page content manager  
(function (global) {
    // Function object 
    var yu = {};

    // Variables 
    var homeHtml = "snippets/home-snippets.html";

    // InnerHTML custom function 
    var insertHTML = function (selector, html) {
        var targetElem = $(selector);
        targetElem.html(html);
    };

    // Show loading page
    var showLoading = function (selector) {
        var html = "<div class ='text-center'>";
        html += "<img src='img/25.gif'></div>";
        insertHTML(selector, html);
    };

    //On page load (Before images or css)
    document.addEventListener("DOMContentLoaded", function (event) {
        showLoader();
        //On first load show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml, function (responseText) {
            $("#main-content").html(responseText);
        }, false);
    });
    global.$yu = yu;

})(window);


function showLoader() {
    // var body = document.getElementById("globalBody");
    // body.onload = ()=>{console.log("Hello")};
    // $("body").addClass('preloader');
    setTimeout(showPage, 2000);
    function showPage() {
        document.getElementById("myLoader").style.display = "none";
        document.getElementById("myLoader").style.position = "block";
        // document.getElementById("bodyContent").style.display = "block";
        // $("#myLoader").fadeOut(500);
        $("#bodyContent").fadeIn(2000);
        $("body").addClass('preloader');
    }
}


