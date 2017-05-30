//Add eventHandlers
document.addEventListener("DOMContentLoaded", function(event) {
  addIconHoverEvents();
  addToggleContainerEvents();
});

//Function for checking if an element has a specific CSS class
var hasClass = function(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

//Icon hover events
function addIconHoverEvents() {

    var web = document.getElementById("web-dev-icon");
    var software = document.getElementById("software-dev-icon");
    var mobile = document.getElementById("mobile-dev-icon");
    var agile = document.getElementById("agile-dev-icon");
    var mobileFirst = document.getElementById("mobile-first-dev-icon");
    var oop = document.getElementById("oop-dev-icon");

    web.addEventListener("mouseover", function(){
       web.setAttribute("src", "/assets/images/icon-web-dev-1.png");
    });
    web.addEventListener("mouseout", function(){
        web.setAttribute("src", "/assets/images/icon-web-dev-2.png");
    });
    software.addEventListener("mouseover", function(){
       software.setAttribute("src", "/assets/images/icon-software-dev-1.png");
    });
    software.addEventListener("mouseout", function(){
        software.setAttribute("src", "/assets/images/icon-software-dev-2.png");
    });
    mobile.addEventListener("mouseover", function(){
       mobile.setAttribute("src", "/assets/images/mobile-web-dev-1.png");
    });
    mobile.addEventListener("mouseout", function(){
        mobile.setAttribute("src", "/assets/images/mobile-web-dev-2.png");
    });
    agile.addEventListener("mouseover", function(){
       agile.setAttribute("src", "/assets/images/icon-agile-dev-1.png");
    });
    agile.addEventListener("mouseout", function(){
        agile.setAttribute("src", "/assets/images/icon-agile-dev-2.png");
    });
    mobileFirst.addEventListener("mouseover", function(){
       mobileFirst.setAttribute("src", "/assets/images/icon-mobile-first-1.png");
    });
    mobileFirst.addEventListener("mouseout", function(){
        mobileFirst.setAttribute("src", "/assets/images/icon-mobile-first-2.png");
    });
    oop.addEventListener("mouseover", function(){
       oop.setAttribute("src", "/assets/images/icon-opp-dev-1.png");
    });
    oop.addEventListener("mouseout", function(){
        oop.setAttribute("src", "/assets/images/icon-opp-dev-2.png");
    });
};

//Toggle Container Events
function addToggleContainerEvents() {

    var web = document.getElementById("web-dev-icon");
    var webDesc = document.getElementById("web-dev-description");
    var software = document.getElementById("software-dev-icon");
    var softwareDesc = document.getElementById("software-dev-description");
    var mobileDesc = document.getElementById("mobile-dev-description");
    var mobile = document.getElementById("mobile-dev-icon");
    var skillcont = document.getElementById("skill-container");
    var selectBox = document.getElementById("select-description");
    var agile = document.getElementById("agile-dev-icon");
    var agileDesc = document.getElementById("agile-dev-description");
    var mobileFirst = document.getElementById("mobile-first-dev-icon");
    var mobileFirstDesc = document.getElementById("mobile-first-dev-description");
    var oop = document.getElementById("oop-dev-icon");
    var oopDesc = document.getElementById("oop-dev-description");
    //Check slider state



    web.addEventListener("click", function(){

        slideElements(webDesc);

    });

    software.addEventListener("click", function(){

        slideElements(softwareDesc);

    });

    mobile.addEventListener("click", function(){

        slideElements(mobileDesc);

    });

    agile.addEventListener("click", function(){

        slideElements(agileDesc);

    });

    mobileFirst.addEventListener("click", function(){

        slideElements(mobileFirstDesc);

    });

    oop.addEventListener("click", function(){

        slideElements(oopDesc);

    });

    function slideElements(element) {


        if (checkSelected() != null) {

            if (checkSelected() === element) {

                element.classList.remove('selected');
                element.classList.add('sliding-left');
                selectBox.classList.remove("collapsed");

            }

            else {

                checkSelected().classList.add('sliding-left');
                checkSelected().classList.remove('selected');
                selectBox.classList.add("collapsed");
                element.classList.add('selected');
                element.classList.remove('sliding-left');

            }

        }

        else {
            element.classList.add('selected');
            element.classList.remove('sliding-left');
            selectBox.classList.add("collapsed");
        }

    }


    function checkSelected() {
        if (hasClass(webDesc, 'selected')) {
            return webDesc;
        }

        else if (hasClass(softwareDesc, 'selected')) {
            return softwareDesc;
        }

        else if (hasClass(mobileDesc, 'selected')) {
            return mobileDesc;
        }

        else if (hasClass(agileDesc, 'selected')) {
            return agileDesc;
        }

        else if (hasClass(mobileFirstDesc, 'selected')) {
            return mobileFirstDesc;
        }

        else if (hasClass(oopDesc, 'selected')) {
            return oopDesc;
        }

        else {
            return null;
        }
    }

    function selectElement(element) {
        webDesc.classList.remove("selected");
        softwareDesc.classList.remove("selected");
        mobileDesc.classList.remove("selected");
        agileDesc.classList.remove("selected");
        mobileFirstDesc.classList.remove("selected");
        oopDesc.classList.remove("selected");

        element.classList.add('selected');
    }




};
