const buttons=document.getElementsByTagName("button")

var valueToBeCalculated = '';
var screenValue = "";

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , buttonsinner);

    function buttonsinner(){
        try{
            if (this.id=="mark="){
                console.log((valueToBeCalculated).toString());
                screenValue=eval(valueToBeCalculated).toString();
                valueToBeCalculated=

            }
            else if (this.id=="markx"){
                valueToBeCalculated+="*";
                screenValue+=this.innerText;
            }
            else{
                valueToBeCalculated+=this.innerText;
                screenValue+=this.innerText;
            }
            document.getElementById("screen").innerHTML=screenValue;
        }
        catch{
            valueToBeCalculated="";
            screenValue="";
            document.getElementById("screen").innerHTML="NaN";
        }
        
    }

    
}

