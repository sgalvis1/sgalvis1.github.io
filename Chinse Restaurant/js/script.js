//Using jquery

function showLoader() {
    $("body").addClass('preloader');
    setTimeout(showPage, 2000);
    function showPage() {
        // document.getElementById("myLoader").style.display ="none";
        document.getElementById("myLoader").style.position ="relative";
        // document.getElementById("bodyContent").style.display = "block";
        $("#myLoader").fadeOut(500);
        $("#bodyContent").fadeIn(2000);
        $("body").removeClass('preloader');
    }
}

$(function () { // Same as document.addEventListener("DOMContentLoaded")

    $("#navBarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
         function closeBar(){
            if (screenWidth < 769) {
                $("#navbarNav").collapse('hide');
            }
        };
        setTimeout(closeBar,500);
    });
});