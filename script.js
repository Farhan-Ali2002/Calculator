let fieldValue = ""
let OneDotAlready = false;
let result = 0
let field = document.getElementById("calculationfield")
let gotOneResult = false
help = 1
function isNumber(value) {
    return /^[+-]?\d+(\.\d+)?$/.test(value);
}

function isOperator(value){
    if (value == '+' || value == '-' || value == 'x' || value == '÷'|| value == '=' || value == '*' || value== "/") {
        return true;
        
    }
    else{
        return false;
    }

}

function isValidMathExpression(expr){
    try{
        math.parse(expr);
        return true;
    }
    catch(ex){
        return false;
    }
}

function showOnField(event){
    var button = event.target;
    var value = button.value;
    console.log(value)
    
    // if(!gotOneResult){
    if (isNumber(value)) {
        if (fieldValue=="0"){
            fieldValue=""
        }
        fieldValue = fieldValue+value
        field.value = fieldValue
        console.log("yes")
    }
    if ( OneDotAlready == false && value == '.') {
        OneDotAlready = true
        fieldValue = fieldValue+value
        field.value = fieldValue
        console.log("yes")

        
    }
    
// }
// else{
//     fieldValue = ""
//     fieldValue = fieldValue+value
//         field.value = fieldValue
//         gotOneResult=false



// }
    if (isOperator(value)) {


        if (value=='x') {
            value = '*'
            
        }
        else if (value=="÷") {
            value = "/"
            
        }
        let lastChar = fieldValue.charAt(fieldValue.length-1)
        if (isOperator(lastChar)) {
            console.log("invalid exp")
            
        }
        else{
            let result = eval(fieldValue)
    console.log(result)
    field.value = result
    fieldValue = result.toString()
    OneDotAlready=false


            fieldValue = fieldValue+value
            field.value = fieldValue



            
            }

        }


    adjustFontSize()
    }
//         let field = document.getElementById("calculationfield")
//        let fieldValue2 = fieldValue

//         fieldValue = fieldValue+value
// if (isValidMathExpression(fieldValue)) {
//     field.value = fieldValue
    
// }
// else{
//         field.value = fieldValue2
//         fieldValue = fieldValue2
// }
   

    
     


function clearField(){
    console.log("yess clear")
    fieldValue = "0"
    let field = document.getElementById("calculationfield")
    field.value = fieldValue
}
function isEqual(){
    
    let field = document.getElementById("calculationfield")
    let lastChar = fieldValue.charAt(fieldValue.length-1)
    if (isNumber(fieldValue)) {
        field.value = fieldValue
        
    }
    else if (isOperator(lastChar)) {
        // if (value=='x') {
        //     value = '*'
            
        // }
        // else if (value=="÷") {
        //     value = "/"
            
        // }
            console.log("invalid exp")
            fieldValue = "invalid exp"
        field.value = fieldValue
            
        }
  
     else{
    let result = eval(fieldValue)
    console.log(result)
    field.value = result
    fieldValue = result.toString()

     }
     gotOneResult=true

    //  let fontSize = window.getComputedStyle(field,null).getPropertyValue("font-size")
    //  fontSize = parseFloat(fontSize)
    //  if (field.value.length>30) {
    //     field.style.fontSize = (fontSize-5)+"px"
    //  }
    
adjustFontSize()
}
function adjustFontSize() {
    var textField = document.getElementById("calculationfield");
    var container = document.getElementById("field-container");

    textField.style.fontSize = "72px"; // Reset font size to initial value

    while (textField.scrollWidth > container.clientWidth) {
      var fontSize = parseFloat(
        window.getComputedStyle(textField, null).getPropertyValue("font-size")
      );
      textField.style.fontSize = (fontSize - 1) + "px";
    }
  }