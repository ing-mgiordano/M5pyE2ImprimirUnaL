function paintTheLetter() {
    const heigth = Number(document.getElementById("input-size").value);
    const base = parseInt(heigth/2 + 1);
    let printHeigth = " ";
    let printBase = " ";
  
    for (counter = 1; counter < heigth; counter++) {
      printHeigth += " *<br>";
    }
    for (counter = 0; counter < base; counter++) {
      printBase += " * ";
    }
    document.getElementById("result").innerHTML = printHeigth + printBase;
  }