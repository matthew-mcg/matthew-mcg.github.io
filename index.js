/*8window.onload=*/function color(){
    var bg = document.getElementById("color");
    bg.style.backgroundColor="rgba("+rand()+","+rand()+","+rand()+",.15)";
}

function rand(){//Gets random int between 0 and 255
    return Math.floor(Math.random() * 255);
}
