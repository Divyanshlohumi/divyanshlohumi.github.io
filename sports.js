var show= $('input[type="number]');
var enter= $('.start')
if(show.val()===0){
    enter.on("click",function(){
    window.alert("Please Enter any quantity");    
    });
}