$("button").click(function (){
  var cl = getComputedStyle(this);
  $(".header").css("color",cl.backgroundColor);
});


var str = "";
var startsWithSpace = true;
$("body").keypress(function (event){
  var appender = event.key;
  console.log(event);
  if(str == "" && appender ==" "){
      $(".header").text("should not start with space");
      return;
  }else if( !(appender.toLowerCase().includes("enter")) && !(appender.toLowerCase().includes("delete")) ){
    str = str+appender;
  }
  if(appender.toLowerCase().includes("delete")){
    str = str.substring(0,str.length-1);
  }
  $(".header").text(str);
});
