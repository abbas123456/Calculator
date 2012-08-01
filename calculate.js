x = 0;
ops = "n";
token = 0;
plusPressed = false;
dividePressed = false;
multiplyPressed = false;
subtractPressed = false;
numberInMemory = 0;
operationToDo = "n";

function calc(op)
{ 
  if (op=="+" && !plusPressed) {
	plusPressed=true;
  } else if (op=="+" && plusPressed) {
        numberInMemory=x;
	operationToDo="+";
	plusPressed=false;
  } else {
    plusPressed=false;
  }
if (op=="-" && !subtractPressed) {
        subtractPressed=true;
  } else if (op=="-" && subtractPressed) {
        numberInMemory=x;
        operationToDo="-";
        subtractPressed=false;
  } else {
    subtractPressed=false;
  }
if (op=="*" && !multiplyPressed) {
        multiplyPressed=true;
  } else if (op=="*" && multiplyPressed) {
        numberInMemory=x;
        operationToDo="*";
        multiplyPressed=false;
  } else {
    multiplyPressed=false;
  }
if (op=="/" && !dividePressed) {
        dividePressed=true;
  } else if (op=="/" && dividePressed) {
        numberInMemory=x;
        operationToDo="/";
        dividePressed=false;
  } else {
    dividePressed=false;
  }

  
if(!isNaN(op) || op==".")
  { if(!token)
    { if(document.calculator.win.value == 0)
      { document.calculator.win.value = op; }
      else
      { document.calculator.win.value = document.calculator.win.value + op; }
    }
    else
    { document.calculator.win.value = op;
      token = 0;
    }
    return;
  }
  else
  { if(op=="C")
    { document.calculator.win.value = 0;
      token = 0;
      x=0;
      ops = "n";
      numberInMemory = 0;
      operationToDo = "n";
      plusPressed = false;
      dividePressed = false;
      multiplyPressed = false;
      subtractPressed = false;
      return;
    }
   
    if(op=="CE")
    { document.calculator.win.value = 0;
      return;
    }
    
    if(op=="%") 
    { document.calculator.win.value = document.calculator.win.value / 100.0;
      token = 1;
      return;
    }

    if(op=="+/-") 
    { document.calculator.win.value = -document.calculator.win.value;
      token = 1;
      return;
    }

    if(op=="+" || op=="*" || op=="/" || op=="-" || op=="=")
    { 
      if (operationToDo=="+" && op=="=") {
     	      x = document.calculator.win.value -(- numberInMemory);
	      document.calculator.win.value = x;
	      return;
      }	
      if (operationToDo=="-" && op=="=") {
              x = document.calculator.win.value - numberInMemory;
              document.calculator.win.value = x;
              return;
      }
      if (operationToDo=="*" && op=="=") {
              x = document.calculator.win.value * numberInMemory;
              document.calculator.win.value = x;
              return;
      }
      if (operationToDo=="/" && op=="=") {
              x = document.calculator.win.value / numberInMemory;
              document.calculator.win.value = x;
              return;
      }
      token = 1;
      if(ops!="n")
      { if(ops=="+")
        { 
	  x = x -(- document.calculator.win.value);
	  document.calculator.win.value = x;
        }
        if(ops=="-")
        { x = x - document.calculator.win.value;
          document.calculator.win.value = x;
        }
        if(ops=="/")
        { x = x / document.calculator.win.value;
          document.calculator.win.value = x;
        }
        if(ops=="*")
        { x = x * document.calculator.win.value;
          document.calculator.win.value = x;
        }
      }
      else
      {
	 x = document.calculator.win.value; }
  
      if(op!="=") { ops=op; }
      else { ops="n"; }
      return;
    }
  }
}
