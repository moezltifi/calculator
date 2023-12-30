const buttons=document.getElementsByTagName("button")

var screenValue = "";

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , buttonsinner)

    function buttonsinner(){
        if (this.id=="mark="){
            screenValue = "";
        }
        else{
            screenValue+=this.innerText
        }
        buttons[i]= document.getElementById("screen").innerHTML=screenValue
    }

    
}

