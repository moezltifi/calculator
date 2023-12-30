const buttons=document.getElementsByTagName("button")

var valueToBeCalculated = '';
var screenValue = "";
const marksList = ["+","-","/","x","."]

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
            else if (marksList.includes(this.innerText) && screenValue.length==0){
                if (this.innerText=="x"){
                    valueToBeCalculated="0"+"*";
                    screenValue= "0"+ this.innerText;
                }
                else{
                    valueToBeCalculated="0"+ this.innerText;
                    screenValue="0"+ this.innerText;
                }
            }

            else if (this.id=="point" && screenValue.length==0){
                screenValue="0.";
                valueToBeCalculated="0."
            }
            else if (this.id=="point" && screenValue.charAt(screenValue.length-1)=="."){
                console.log("point")
            }
            else if ( marksList.includes(this.innerText) &&  marksList.includes(screenValue.charAt(screenValue.length-1))){
                console.log("mark")
                valueToBeCalculated=valueToBeCalculated.slice(0,valueToBeCalculated.length-1)
                screenValue=screenValue.slice(0,screenValue.length-1)
                if (this.innerText=="x"){
                    valueToBeCalculated+="*";
                    screenValue+=this.innerText;
                }
                else{
                    valueToBeCalculated+=this.innerText;
                    screenValue+=this.innerText;
                }
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

