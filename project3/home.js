$(document).ready(function()
    {
       var t=0;
    var b1=$(".button1");
    var b2=$(".button2");
    var b3=$(".button3");
    var b4=$(".button4");
    var b5=$(".button5");
    var b6=$(".button6");
    var b7=$(".button7");
    var b8=$(".button8");
    var b9=$(".button9");
      $("input[type='button']").click(function()
    {
          t++;
            if(t>8)
           {
               alert("Match Tied");
               Reset();
           }
         if(t%2==0)
           {
               $(this).addClass("zero").attr("value","0");
           }
       else{
               $(this).addClass("cross").attr("value","X");
           }
        if(b1.hasClass('zero')&&b2.hasClass('zero')&&b3.hasClass('zero')||b1.hasClass('zero')&&b4.hasClass('zero')&&b7.hasClass('zero')||b1.hasClass('zero')&&b5.hasClass('zero')&&b9.hasClass('zero')||b4.hasClass('zero')&&b5.hasClass('zero')&&b6.hasClass('zero')||b7.hasClass('zero')&&b8.hasClass('zero')&&b9.hasClass('zero')||b3.hasClass('zero')&&b5.hasClass('zero')&&b7.hasClass('zero')||b2.hasClass('zero')&&b5.hasClass('zero')&&b8.hasClass('zero')||b3.hasClass('zero')&&b6.hasClass('zero')&&b9.hasClass('zero'))
         {
           alert("O Has Won The Game");
           Reset();
          }
        if(b1.hasClass('cross')&&b2.hasClass('cross')&&b3.hasClass('cross')||b1.hasClass('cross')&&b4.hasClass('cross')&&b7.hasClass('cross')||b1.hasClass('cross')&&b5.hasClass('cross')&&b9.hasClass('cross')||b4.hasClass('cross')&&b5.hasClass('cross')&&b6.hasClass('cross')||b7.hasClass('cross')&&b8.hasClass('cross')&&b9.hasClass('cross')||b3.hasClass('cross')&&b5.hasClass('cross')&&b7.hasClass('cross')||b2.hasClass('cross')&&b5.hasClass('cross')&&b8.hasClass('cross')||b3.hasClass('cross')&&b6.hasClass('cross')&&b9.hasClass('cross'))
         {
           alert("X Has Won The Game");
           Reset();
          }
        });
       
  $("button").click(function()
                 {
                   Reset();
                 });
});
function Reset()
{
    location.reload();
}