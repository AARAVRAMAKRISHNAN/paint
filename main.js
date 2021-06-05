var mouse_event="";
var last_x_position="";
var last_y_position="";
var color="limegreen";
canvas=document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",Mymousedown);
function Mymousedown(){
    mouse_event="mousedown";

} 
canvas.addEventListener("mousemove",Mymousemove);
function Mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=10;
    ctx.moveTo(last_x_position,last_y_position);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();        
    }
     last_x_position=current_position_of_mouse_x;
     last_y_position=current_position_of_mouse_y
}
    canvas.addEventListener("mouseup",Mymouseup);
    function Mymouseup(e){
        mouse_event="mouseup";
    }
    canvas.addEventListener("mouseleave",Mymouseleave);
    function Mymouseleave(e){
        mouse_event="mouseleave";}
function lalala(){
    ctx.clearRect(0,0, ctx.canvas.width,  ctx.canvas.height);
}
       

        