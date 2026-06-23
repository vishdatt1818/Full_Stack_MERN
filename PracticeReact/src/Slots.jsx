export default function Slots({a,b,c}){
    const isWinner = a=== b && b===c;
    return (
        <>
        <h1>
            {a}{b}{c}
        </h1>

        {a=== b && b===c ? <h1 style={{color: isWinner ? "orange" :"red"}}>You Win</h1> : <h2>You Lose</h2>}
        {a=== b && b===c ? <h3>congrats</h3> : null}
        </>
    )
}


