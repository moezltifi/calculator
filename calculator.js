const buttons=document.getElementsByTagName("button")

var valueToBeCalculated = '';
var screenValue = "";

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click" , handleButtonClick);

    function handleButtonClick(){
        try{
            if (this.id=="reset"){
                valueToBeCalculated="";
                screenValue="";
            }
            else if (this.id == "del") {
                // Check if there are characters to delete
                if (valueToBeCalculated.length > 0) {
                    // Remove the last character
                    valueToBeCalculated = valueToBeCalculated.slice(0, -1);
                    screenValue = valueToBeCalculated;
                }
            }
            else if (this.id=="mark="){
                console.log((valueToBeCalculated).toString());
                screenValue=eval(valueToBeCalculated).toString();
                valueToBeCalculated=screenValue

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

