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
    var allCategoriesURL = "https://davids-restaurant.herokuapp.com/categories.json";
    // var allCategoriesURL = "https://sgalvis1.github.io/Chinse%20Restaurant/data.json";
    var cateogryItemsURL = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var menuTileHTML = "snippets/menu-tile-snippet.html";
    var menuItemHTML = "snippets/menu-item-snippet.html";
    var categoriesTitleHTML = "snippets/categories-snippet.html";
    var categoryItemHTML = "snippets/category-tile-snippet.html";


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

    // Load the single menu category
    yu.LoadCategory = function (category) {
        showLoading("main-content");
        // Run the buildShowCategory Function with the JSON object
        $ajaxUtils.sendGetRequest(cateogryItemsURL + category, buildShowCategory, true);

    };

    // Build and show the single menu category
    function buildShowCategory(categoryMenuItems) {
        // Load title snippet of cateogry items page 
        $ajaxUtils.sendGetRequest(categoriesTitleHTML, function (categoriesTitleHTML) {
            // Load the category Item Snippet
            $ajaxUtils.sendGetRequest(categoryItemHTML, function (categoryItemHTML) {
                // Build the category page
                var cateogoryItemsViewHTML = buildCategoryView(categoryMenuItems, categoriesTitleHTML, categoryItemHTML);
                //insertHTML("#main-content",cateogoryItemsViewHTML);
            },
                false);
        },
            false);
    }
    // Build the menu category page
    function buildCategoryView(categoryMenuItems, categoriesTitleHTML, categoryItemHTML) {
        categoriesTitleHTML = insertProperty(categoriesTitleHTML, "name", `${categoryMenuItems.category.name}`);
        categoriesTitleHTML= insertProperty(categoriesTitleHTML, "special_instructions", categoryMenuItems.category.special_instructions);
        insertHTML("#main-content", categoriesTitleHTML);
        // var html = categoryItemHTML;
        var finalHtml = "";
        for (var i=0; i<categoryMenuItems.menu_items.length; i++){
            var item = categoryMenuItems.menu_items[i];
            var html = categoryItemHTML;
            html = insertProperty(html,"short_name",item.short_name);
            html = insertProperty(html,"price_small",item.price_small);
            html = insertProperty(html,"price_large",item.price_large);
            html = insertProperty(html,"name",item.name);
            html = insertProperty(html,"short_description",item.description);
            finalHtml += html;
        }
        insertHTML("#menu-item-content",finalHtml);
    }

    // Load the menu categories view
    yu.loadMenu = function () {
        showLoading("#main-content");
        // $ajaxUtils.sendGetRequest("data.json", AjaxTest);
        $ajaxUtils.sendGetRequest(allCategoriesURL, buildShowMenu);
        buttonActive();
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
                insertHTML("#itemsContent", menuViewHTML);
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
            var name = `${items[i].name}`;
            var short_name = `${items[i].short_name}`;

            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }
        //finalHtml += "</div> </div>";
        return finalHtml;
    }

    // Buttons active function
    function buttonActive(){
        // Remove the active state
        var classes = document.querySelector("#home-button").className;
        classes = classes.replace(new RegExp("current-selection","g"),"");

        document.querySelector("#home-button").className = classes;

        // Add the active state 
        classes =  document.querySelector("#menu-button").className;
        if (classes.indexOf("active")==-1){
            classes += " current-selection";
            document.querySelector("#menu-button").className = classes;
        }
    }


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


