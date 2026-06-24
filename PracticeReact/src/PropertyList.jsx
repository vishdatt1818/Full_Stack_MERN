import Property from "./Property"

export default function PropertyList({proper}){
    return(
        <div>
            {proper.map((p) =>{
                // return <Property {...p} key={p.id} />
                return <Property name={p.name} price={p.price} rating={p.rating} key={p.id} />
            })}
        </div>
    )
}