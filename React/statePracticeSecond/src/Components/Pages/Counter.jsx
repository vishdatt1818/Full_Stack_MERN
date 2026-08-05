import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const dec=()=>{
  //     setCount=count-1

  // }
  const colors = ["Red", "Blue", "Green", "Yellow"];

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor];
  };

  const [computerChoice, setComputerChoice] = useState(getRandomColor());
  const [clickedColor, setClickedColor] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = (color) => {
    setClickedColor(color)

    if(color === computerChoice){
        setMessage("Correct guess")
        setScore(score + 1)
    }else{
        setMessage(`Wrong choice Computer choose ${computerChoice}`)
    }

    setComputerChoice(getRandomColor())
  }

  return (
    <>
      <div className="container">
        <h1>Count:{count} </h1>

        <button onClick={() => setCount(count + 1)}>❤️</button>

        <button onClick={() => setCount(count - 1)}>😞</button>
        <button onClick={() => setCount(0)}>🏏</button>
      </div>

      <div className="container m-5 gap-2">
        <h1>score : {score}</h1>

        <h2>You Clicked : {clickedColor}</h2>

        <p>{message}</p>

        {/* {colors.map((cc) => (
            <button
        onClick={ () => handleClick(cc)}
        >{cc}</button>))} */}

        <button onClick={() => handleClick("Red")}>Red</button>
        <button onClick={() => handleClick("Blue")}>Blue</button>
        <button onClick={() => handleClick("Green")}>Green</button>
        <button onClick={() => handleClick("Yellow")}>Yellow</button>
        
      </div>
    </>
  );
}
