$("#barbtn ,#closbtn").click(function () {

  let width = $(".navbar").css("width")
  let widthBar = $(".background").css("margin-left")
  console.log(widthBar);
  if (width == "250px") {

    $(".navbar").animate({ width: `0px` }, 500)
    $(".background").animate({marginLeft:`0px`},500)
  }
  else {

    $(".navbar").animate({ width: `${widthIneer}px` }, 500)
    $(".background").animate({marginLeft:`${widthBarIneer}px`},500)
  }

})
let widthIneer = $(".navbar").outerWidth(true)
let widthBarIneer =$(".navbar").outerWidth(true)
$(".navbar").css({ width: `0px` })




$(".text-body.active").css("display","block")
$("h3").click(function () {
  if ($(this).next(".text-body").hasClass("active")) {
    $(this).next(".text-body").removeClass("active").slideUp(500)
    
  }
  else {
    $(".text-body").removeClass("active").slideUp(500)
    $(this).next(".text-body").addClass("active").slideDown(500)
    
  }
    
})




let countDownDate = new Date("Jan 1, 2025 16:59:59").getTime();
let counter = setInterval(()=>{
  let date = new Date().getTime();
  let dateDiff =countDownDate -date;
  let days = Math.floor(dateDiff /(1000*60*60*24));
  let hours = Math.floor((dateDiff %(1000*60*60*24))/(1000*60*60));
  let min = Math.floor((dateDiff %(1000*60*60))/(1000*60));
  let sec = Math.floor((dateDiff %(1000*60))/ 1000);

  document.getElementById("day").innerHTML= days +" D"
  document.getElementById("hour").innerHTML= hours +" h"
  document.getElementById("min").innerHTML= min +" m"
  document.getElementById("sec").innerHTML= sec +" s"

  if(dateDiff <0){
    clearInterval(counter);
  }
},1000)


$(function(){
  var maxText =$("textarea").attr("maxlength");
  $(".massege").html(`<span>${maxText}</span> Characyer Reamining`)
  $("textarea").keyup(function(){
    var textLength = $(this).val().length,
    remChar = maxText - textLength;
    $(".massege").html(`<span>${remChar}</span> Characyer Reamining`)
    if(remChar == 0){
      $(".massege").html(`<span>your available character finished</span> Characyer Reamining`)
    }
    
  })
  
})
