import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// var converter = require("number-to-words");

function App() {
  const [word, setword] = useState("");

  const ones = [
    " zero ",
    " one ",
    " two ",
    " three ",
    " four ",
    " five ",
    " six ",
    " seven ",
    " eight ",
    " nine ",
    " ten ",
    " eleven ",
    " twelve ",
    " thirteen ",
    " fourteen ",
    " fifteen ",
    " sixteen ",
    " seventeen ",
    " eightteen ",
    " nineteen ",
  ];
  const tens = [
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const htlc = [
    " hundred ",
    "thousand ",
    " lakh ",
    " crore",
    
   
  ];

  const changeHandler = (e) => {
    let num = e.target.value;
    let counter = 0;
    let str = "";
   if(num.length>11){
     setword("Out of range!")
     return;
   }
    for (let i = num.length - 1; i > -1; i--) {
      if (counter === 3) str += ",";
      if (counter % 2 === 1 && counter > 3) str += ",";
      counter++;
      str += num[i];
    }
    str = str.split(",");
    //console.log(str)
    let res = "";
    for (let i = 0; i < str.length; i++) {
      let temp = str[i].split("");
      temp = temp.reverse();
      temp = temp.toString().replace(",", "");
      if (i === 0) {
        temp = temp.split(",").toString().replace(",", "");
        if (Number(temp) < 99) res += give99(temp);
        else res += ones[Number(temp[0])] + htlc[0] + give99(temp[1] + temp[2]);
      } else {
        if (Number(temp) !== 0) res = give99(temp) + htlc[i] + res;
      }
    }

    setword(res);
  };

  const give99 = (temp1) => {
    let temp = temp1;
    console.log(Number(temp));
    if (temp[0] === "0") temp = temp1.substring(1);
    if (Number(temp) === 0) return "";
    else {
      if (Number(temp) < 20) return ones[Number(temp)];
      else if (temp[1] === "0") return tens[Number(temp[0]) - 2];
      else return tens[Number(temp[0]) - 2] + ones[Number(temp[1])];
    }
  };

  return (
    <div className="App">
      <p>Enter the number here (Max digits 11)</p>
      <p>
        <input onChange={changeHandler} type="number" maxLength={11}></input>{" "}
      </p>
      <p>{word}</p>
    </div>
  );
}

export default App;
