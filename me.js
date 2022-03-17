$(document).ready(function(){

    //nav bar sticky
    $(window).scroll(function(){
        if(this.scrollY > 25){
            $('.navBar').addClass('sticky');
        }
        else{
            $('.navBar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scrollUpBtn').addClass("show");
        }
        else{
            $('.scrollUpBtn').removeClass("show");
        }
    });

    //Slide Up Script
    $('.scrollUpBtn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehaviour", "auto");
    });

    $('.navBar .leadTo li a').click(function(){
        //smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");

        $('.navBar .leadTo').removeClass("showNav");
        $('.leadToBtn i').removeClass("active");
    });

    //dropdown menu
    $('.leadToBtn').click(function(){
        $('.navBar .leadTo').toggleClass("showNav");
        $('.leadToBtn i').toggleClass("active");
    });

    //name changer function
    var typed = new Typed(".typing", {
        strings: ["Software Engineer", "Computer Scientist", "Student", "Guitarist", "Swimmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing2", {
        strings: ["Software Engineer", "Computer Scientist", "Student", "Guitarist", "Swimmer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })


    //education dropdown menu
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
    }

})