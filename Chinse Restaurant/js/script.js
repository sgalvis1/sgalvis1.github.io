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
    //var allCategoriesURL = "http://davids-restaurant.herokuapp.com/categories.json";
    var allCategoriesURL = "https://sgalvis1.github.io/Chinse%20Restaurant/data.json";
    var menuTileHTML = "snippets/menu-tile-snippet.html";
    var menuItemHTML = "snippets/menu-item-snippet.html";


    // InnerHTML custom function 
    var insertHTML = function (selector, html) {
        var targetElem = $(selector);
        targetElem.html(html);
    };

    // Insert Property
    // with propValue given in 'string'
    var insertProperty = function (string, propName, propValue) {
        var propToReplace = `{{ ${propName} }}`;
        // Search for all string equal to propToReplace and replace them
        // with the propValue 
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
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

    // Load the menu categories view
    yu.loadMenu = function () {
        showLoading("#main-content");
        // $ajaxUtils.sendGetRequest("data.json", AjaxTest);
        $ajaxUtils.sendGetRequest(allCategoriesURL, buildShowMenu);
    };

    function AjaxTest(res) {
        document.querySelector("#nameContent").innerText =
            `First Name: ${res[0].name}`;
    };

    // Build and show the menu categories
    function buildShowMenu(categories) {
        // Load tile snippet of menu page 
        $ajaxUtils.sendGetRequest(menuTileHTML, function (menuTileHTML) {
            //Retrive single category snippet
            $ajaxUtils.sendGetRequest(menuItemHTML, function (menuItemHTML) {
                var menuViewHTML = buildMenu(categories, menuTileHTML, menuItemHTML);
                insertHTML("#main-content", menuTileHTML);
                insertHTML("#itemsContent",menuViewHTML);
            },
                false);

        },
            false);
    }

    // Build Menu Page
    function buildMenu(items, menuTileHTML, menuItemHTML) {
        // var finalHtml = menuTileHTML;
        var finalHtml = "";
        // finalHTML += "<section class='row'>";

        //Loop over items
        for (var i = 0; i < items.length; i++) {
            //Insert item values
            var html = menuItemHTML;
            var name = ` ${items[i].name}`;
            var short_name = items[i].short_name;

            html = insertProperty(html,"name", name);
            //html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }
        //finalHtml += "</div> </div>";
        return finalHtml;
    };

    global.$yu = yu;

    // Ajax Text 
    // document.querySelector("#ajaxBtn").addEventListener("click", function () {
    //     var self = this;
    //     var name = "";

    //     console.log("button");
    //     $ajaxUtils.sendGetRequest("data.json",
    //         function (res) {
    //             document.querySelector("#nameContent").innerText =
    //                 `First Name: ${res[2].name}`;
    //         });

    // });

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


