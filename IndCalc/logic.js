// //turns calculation

// function turnsCalc() {
//     let calculatedTurns;
//     return function(testTurns, measuredInd, neededInd) {
//         let indKoef = neededInd / measuredInd;
//         let turnsKoef = Math.sqrt(indKoef);
//         calculatedTurns = testTurns * turnsKoef;
//         return calculatedTurns;
//     }
// }


// //inductivity calculation

// function indCalc() {
//     let calculatedInd;
//     return function(testTurns, measuredInd, suposedTurns) {
//         testTurns = document.getElementById('testT').value;
//         measuredInd = document.getElementById('measuredI').value;
//         suposedTurns = document.getElementById('suposedT').value;
//         let turnsKoef = suposedTurns / testTurns;
//         let indKoef = turnsKoef * turnsKoef;
//         calculatedInd = measuredInd * indKoef;
//         return calculatedInd;
//         document.getElementById('res').innerHTML = calculatedInd;
//     }
// }

// // document.getElementById('res').innerHTML = indCalc();

// function showIndCalc() {
//     indCalc();
// }

// // let ind = indCalc();
// // console.log(ind(100, 230, 5000).toFixed());


function fn() {
    let tstT = Number(document.getElementById('in').value);
    let tstI = Number(document.getElementById('in1').value);
    let spT = Number(document.getElementById('in2').value);
    let res;
    res = tstI * (spT / tstT) * (spT / tstT);

    document.getElementById("par").innerHTML = "For " +
        spT + " turns inductance will be " + res.toFixed(1) + " mHn";
}

function fn1() {
    let tstT = Number(document.getElementById('1in').value);
    let tstI = Number(document.getElementById('1in1').value);
    let nedI = Number(document.getElementById('1in2').value);
    let res;
    res = tstT * Math.sqrt(nedI / tstI);

    document.getElementById("par1").innerHTML = "For " + nedI + " mHn need " + res.toFixed(1) + " turns";

}