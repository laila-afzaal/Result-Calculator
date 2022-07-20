function calculate() {

  let tmark1 = document.querySelector("#tmark1").value; 
  let tmark2 = document.querySelector("#tmark2").value;
  let tmark3 = document.querySelector("#tmark3").value;
  let tmark4 = document.querySelector("#tmark4").value;
  let tmark5 = document.querySelector("#tmark5").value; 
  let tmark6 = document.querySelector("#tmark6").value; 
  let tmark7 = document.querySelector("#tmark7").value;
  let tmark8 = document.querySelector("#tmark8").value;
  let tmark9 = document.querySelector("#tmark9").value;
  let tmark10 = document.querySelector("#tmark10").value;
 
   let ttmark1 = Number(tmark1);
   let ttmark2 = Number(tmark2);
   let ttmark3 = Number(tmark3);
   let ttmark4 = Number(tmark4);
   let ttmark5 = Number(tmark5);
   let ttmark6 = Number(tmark6);
   let ttmark7 = Number(tmark7);
   let ttmark8 = Number(tmark8);
   let ttmark9 = Number(tmark9);
   let ttmark10 = Number(tmark10);
 
   let Totalmarks = (ttmark1 + ttmark2 + ttmark3 + ttmark4 + ttmark5 + ttmark6 + ttmark7 + ttmark8 + ttmark9 + ttmark10);

   let obmark1 = document.querySelector("#obmark1").value; 
   let obmark2 = document.querySelector("#obmark2").value;
   let obmark3 = document.querySelector("#obmark3").value; 
   let obmark4 = document.querySelector("#obmark4").value;
   let obmark5 = document.querySelector("#obmark5").value;
   let obmark6 = document.querySelector("#obmark6").value;
   let obmark7 = document.querySelector("#obmark7").value;
   let obmark8 = document.querySelector("#obmark8").value;
   let obmark9 = document.querySelector("#obmark9").value;  
   let obmark10 = document.querySelector("#obmark10").value;
  
    let nenum1 = Number(obmark1);
    let nenum2 = Number(obmark2);
    let nenum3 = Number(obmark3);
    let nenum4 = Number(obmark4);
    let nenum5 = Number(obmark5);
    let nenum6 = Number(obmark6);
    let nenum7 = Number(obmark7);
    let nenum8 = Number(obmark8);
    let nenum9 = Number(obmark9);
    let nenum10 = Number(obmark10);
 
    let Obtainedmarks = (nenum1 + nenum2 + nenum3 + nenum4 + nenum5 + nenum6 + nenum7 + nenum8 + nenum9 + nenum10);

    document.querySelector("#MarksObtained").innerHTML = `Obtained Marks = ${Obtainedmarks} out of ${Totalmarks}`;
   
    let Percentage = (Obtainedmarks * 100 / Totalmarks); 
    let Percent = Math.trunc(Percentage);
    // Percentage =  Percentage. toFixed(2)
    document.querySelector("#Percentage").innerHTML = `Percentage = ${Percentage}%`;
   
 
    if(Percentage >= 80 && Percentage <= 100){
     document.querySelector("#Grade")
     .innerHTML = "You've got A+ Grade";
 
   } else if(Percentage >= 70 && Percentage <= 79.9){
     document.querySelector("#Grade")
     .innerHTML = "You've got A Grade";
 
   } else if(Percentage >= 60 && Percentage <= 69.9){
     document.querySelector("#Grade")
     .innerHTML = "You've got B Grade";
   
   } else if(Percentage >= 50 && Percentage <= 59.9){
     document.querySelector("#Grade")
     .innerHTML = "You've got C Grade";
  
   } else if(Percentage >= 40 && Percentage <= 49.9){
     document.querySelector("#Grade")
     .innerHTML = "You've got D Grade";

   } else if(Percentage >= 30 && Percentage <= 39.9){
     document.querySelector("#Grade")
     .innerHTML = "You've got E Grade";
 
   } else {
    document.querySelector("#Grade")
    .innerHTML = "You are FAIL!"; 
  }
}
