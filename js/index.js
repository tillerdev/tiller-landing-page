setTimeout(function(){
    setTimeout(function(){
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#hero").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeOut");
      $("#services").removeClass("animated fadeOut");
      $("#portfolio").removeClass("animated fadeOut");
    },1500);
},1500); 
