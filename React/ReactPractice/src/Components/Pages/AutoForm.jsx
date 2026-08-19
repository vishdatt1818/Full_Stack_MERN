import React, { useRef, useState } from "react";

const AutoForm = () => {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const [mess, setMess] = useState("");

  const [check, setCheck] = useState(true);

  const handleChange = (e, nextRef, isLast = false) => {
    const { value } = e.target;

    if (value.length >= 1 && nextRef) {
      nextRef.current.focus();
    }

    if (value.length >= 1 && isLast) {
      const fullOtp = `${input1.current.value}${input2.current.value}${input3.current.value}${input4.current.value}`;
      console.log(" OTP ", fullOtp);
      console.log("Form Submitted!");
      //   console.log(value);

      setMess("Form Submitting.....");
      //   setTimeout(() => {

      setCheck(false);

      setMess("");
      //   }, 1000);

      setTimeout(() => {
        setCheck(true);
      }, 2000);
    }
  };

  const [count, setCount] = useState(0);
  const [vcount, setvCount] = useState(0);
  const [smCount, setSMCount] = useState(0);
  const [wCount, setWCount] = useState(0);
  const [capCount, setCapCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [repeat, setRepeat] = useState({})

  function run(str) {
    console.log(str);

    let wordCount = 0;
    let capwordCount = 0;
    let smwordCount = 0;
    let vowwordCount = 0;
    let vow = "aeiouAEIOU";

    let wordCountt = 0
    
    let words = str.split(" ")
    console.log(words);

    let box ={}
    
    
    for(let word of words){
        if(box[word] === undefined){
            box[word] = 1
        }else{
            box[word]++
        }
    }
    setRepeat(box)
    console.log(box);
    for (let i = 0; i < words.length; i++){
        if(words[i] == "this"){
            wordCountt++
        }
    }
    setWCount(wordCountt)

    for (let i = 0; i < str.length; i++) {

      if(str[i]){
      wordCount++
    //   setCount(count+1)
      }
      if(vow.includes(str[i])){
      vowwordCount++
    //   setvCount(vcount+1)
      }
      if(/[A-Z]/.test(str[i])){
          capwordCount++

      }
      if (/[a-z]/.test(str[i])) {
        smwordCount++;
      }
     
     
    
    }
   

    setCapCount(capwordCount);
    setSMCount(smwordCount);
    setvCount(vowwordCount)
    setCount(wordCount)
   
    // if (count === 99) {
    //   setIsDisabled(true);
    // }
  }

  return (
    <>
      {check ? (
        <div>
          <input
            ref={input1}
            type="number"
            // maxLength="1"
            // inputMode="numeric"
            onChange={(e) => handleChange(e, input2)}
          />
          <input
            ref={input2}
            type="number"
            // maxLength="1"
            // inputMode="numeric"
            onChange={(e) => handleChange(e, input3)}
          />
          <input
            ref={input3}
            type="number"
            // maxLength="1"
            // inputMode="numeric"
            onChange={(e) => handleChange(e, input4)}
          />
          <input
            ref={input4}
            type="number"
            // maxLength="1"
            // inputMode="numeric"

            onChange={(e) => handleChange(e, null, true)}
          />
          <h1 className="text-primary">{mess}</h1>
        </div>
      ) : (
        " Form Submitting Loading....."
      )}

      <div className="container mt-5">
        <input
        //   disabled={isDisabled}
          onChange={(e) => run(e.target.value)}
          type="text"
        />
        <h1>count : {count}</h1>
        <h1>vowels : {vcount}</h1>
        <h1>Capital : {capCount}</h1>
        <h1>Small : {smCount}</h1>
        <h1>thisCount : {wCount}</h1>
      {
        Object.entries(repeat).filter(([word, count]) => count > 1)
        .map(([word, count]) => (<h3>{word} {count}</h3>))
      }
      </div>
    </>
  );
};

export default AutoForm;
