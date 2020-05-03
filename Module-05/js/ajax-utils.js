(function (global){
    var ajaxUtils= {};
    // Create the XHMLHttp object if it's supported
    function getRequestObject(){
        if (window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }else{
            global.alert("Ajax is not supported");
            return null;
        }
    }
    
    // Get data from server function
    ajaxUtils.sendGetRequest = function(requestURL, responseHandler){
        console.log("AJAX Function");
        var request = getRequestObject();
        // If ready run the handle function
        request.onreadystatechange = function(){
            // Test if the message is ready and run the handle function
            handleResponse(request,responseHandler);
        };
        //Get and send the object to java engine
        request.open("GET", requestURL, true);
        request.send("null");
    };

    // Handle function
    function handleResponse (request,responseHandler){
        // console.log(request.status);
        // Test if the message is ready and run the function
        if( (request.readyState == 4) && (request.status == 200)){
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);