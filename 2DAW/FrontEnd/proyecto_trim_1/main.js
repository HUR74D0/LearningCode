window.onload = function (){

    // ------------- Expandable Divs ----------------------------------
    $(".readmore-btn").click(function(){
        // Show hided content
        $(this).next().slideDown("slow");
        // Hide readmore btn
        $(this).hide();
    });

    $(".readless-btn").click(function(){
        // Hide the shown info from the expandable div
        $expandableDiv = $(this).parent();
        $expandableDiv.slideUp("slow");
        // Show again the readmore-btn for returning to the starting point
        $expandableDiv.siblings(".readmore-btn").show();
    })


    setInterval(randomHeader, 5000);

    // Change winner images
    document.getElementById("t_francia").
        addEventListener("mouseover", changeWinnerImg("froome.jpg"));
    document.getElementById("g_italia").
        addEventListener("mouseover", changeWinnerImg("contador.jpg"));
    document.getElementById("v_espana").
        addEventListener("mouseover", changeWinnerImg("aru.jpg"));
    
    //---------------------Countdowns-----------------------------------------
    //  Giro Italia
    var g_italiaBegin = new Date ("2016/4/6");
    var g_italiaCountDown = countdown(g_italiaBegin);

    printCountDown(g_italiaCountDown, "g_italia")();
    setInterval(printCountDown(g_italiaCountDown, "g_italia"), 1000);

    // Tour France
    var t_franciaBegin = new Date ("2016/7/2");
    var t_franciaCountDown = countdown(t_franciaBegin);

    printCountDown(g_italiaCountDown, "t_francia")();
    setInterval(printCountDown(t_franciaCountDown, "t_francia"), 1000);

    //Vuelta España
    var v_espanaBegin = new Date ("2016/8/22");
    var v_espanaCountDown = countdown(v_espanaBegin);
    
    printCountDown(g_italiaCountDown, "v_espana")();
    setInterval(printCountDown(v_espanaCountDown, "v_espana"), 1000);
}

function randomHeader(){
    var imageHeaders = [
        "header1.jpg",
        "header2.jpg",
        "header3.jpg",
        "header4.png",
        "header5.png",
        "header6.jpg",
        ]
    var $imgHolder = $("#img_bottom");
    var regEx = new RegExp("(header[0-9]+\.[a-z]+)");//gets the header file name

    //Get the actual header img background
    var backgroundProperty = $imgHolder.css("backgroundImage");
    var headerActualImg = regEx.exec(backgroundProperty)[0];
    
    //Choose a new image diferent from the actual
    do{
        var randomPosition = Math.floor(Math.random() * imageHeaders.length);
        var newImage = imageHeaders[randomPosition];
    }while(newImage === headerActualImg)

    //Set the image
    //$imgHolder.css("backgroundImage", backgroundProperty.replace(regEx, newImage))

    $imgHolder.fadeOut("slow", function(){
        $imgHolder.css("backgroundImage", backgroundProperty.replace(regEx, newImage));
        $imgHolder.fadeIn("slow");
    })
}

function readmore(){
    var thisPatent = this.parentNode;
    var expandableSection = thisPatent.getElementsByClassName("readmore")[0];
    console.log(expandableSection);
    expandableSection.style.display = "inline";
    this.style.display = "none";
}

function readless(){
    var expandableSection = this.parentNode;
    expandableSection.style.display = "none";
    var readMoreLink = this.parentNode.parentNode.getElementsByClassName("readmore-btn")[0];
    readMoreLink.style.display = "inline";
}

function changeWinnerImg(imgSrc){
    return function(){
        var imgHolder = document.getElementById("winner_photo");
        imgHolder.src="./img/winners/" + imgSrc;
    }
}

function printCountDown(countdown, textHolderId){
    return function(){
        document.getElementById(textHolderId).
            getElementsByTagName("span")[0].innerHTML = countdown();
    }
}
