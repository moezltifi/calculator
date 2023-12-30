const buttons=document.getElementsByTagName("button")

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , buttonsinner)

    function buttonsinner(){
       buttons[i]= document.getElementById("screen").innerHTML=this.innerText
    }

    
}

