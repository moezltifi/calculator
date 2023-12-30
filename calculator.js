const buttons=document.getElementsByTagName("button")

var screenValue = "";
var calculatedValue = "";

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , buttonsinner);

    function buttonsinner(){
        if (this.id=="mark="){
            console.log(eval(screenValue).toString());
            calculatedValue=eval(screenValue).toString();

            screenValue = calculatedValue;
        }
        else{
            screenValue+=this.innerText;
        }
        document.getElementById("screen").innerHTML=screenValue;
    }

    
}

