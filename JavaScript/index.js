let i=0;
let txt=" Hi , My name is Diyorbek. I`m Wep-Developer ";
function yoz() {
    
    if(i<txt.length){
       demo.innerHTML+=txt.charAt(i);
       i++;
       setTimeout("yoz()", 70)
    }
}


$(document).ready(function(){
        $("#bars,#close").click(function(){
            
            $(".phone").toggle(40);

            $("#bars").css({
                "z-index":"1"
            })
    
            navigator.vibrate(45);

        })
        $(".phone").css({
            'z-index':"2"
        })
      

    $(function(){
        $(".phone ul li a").click(function(){

            $(".phone").slideToggle(70);


        })
    })
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
$('#btn_send').click(function(){
    alert('Send')
})


//bot token
var telegram_bot_id = "5286309980:AAHhS90unLpyvgncizOmCEJCdRrtfaeuj7Q"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 1497284051; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};