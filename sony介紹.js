 $(function(){

   var H = $('.par1').offset().top - 1200;
   var J = $('.par2').offset().top - 500;
   var F = $('.par3').offset().top - 100;
   var M = $('.mg2').offset().top - 500;
   var y = $('.mg3').offset().top - 50;
   var k = $('.mg4').offset().top - 50;



   $(window).scroll(function(){

   var N = $(window).scrollTop();
    console.log(N);

    if(N > H){
     $('.par1').animate({fontSize:'50px'},500);
     }
     if(N > J){
    $('.par2').css('color', 'pink');
    $('.par2').animate({fontSize:'40px'},500);
     }
     if(N > F){
    $('.par3').css('color', 'orange');
    $('.par3').animate({fontSize:'40px'},500);
     }


     if(N > M){
     $('.mg2').animate({right:'200px', opacity:'1'},1000);
     }

     if(N > y){
      $('.mg3').animate({right:'200px', opacity:'1'},1000);
     }
     if(N > k){
      $('.mg4').animate({right:'200px', opacity:'1'},1000);
     }

   })

   $('.return').click(function(){
      $('html,body').animate({scrollTop:0},500);
      return false;
    })
  
 })

