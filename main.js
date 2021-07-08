var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
block_width="150";
block_height="400";
block=new Image;
block_x=10;
block_y=10;
    function ranger_img(){
        ctx.drawImage(block, block_x,block_y,block_width,block_height);
        console.log("ranger uploaded");
        };
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log("key_pressed")
    if (keypressed == '67'){
        console.log("The C key was just pressed");
        block.src='gr.png';
        block_x=200;
        ranger_img()
    }
    if (keypressed == '70'){
        console.log("The F key was just pressed");
        block.src='pr.png';
        block_x=400;
        ranger_img()
    }
    if (keypressed == '69'){
        console.log("The E key was just pressed");
        block.src='rr.jpg';
        block_x=0;
        ranger_img()
    }
    if (keypressed == '82'){
        console.log("The R key was just pressed");
        block.src='yr.png';
        block_x=600;
        ranger_img()
    }
    if (keypressed == '88'){
        console.log("The X key was just pressed");
        block.src='br.png';
        block_x=800;
        ranger_img()
    }
}