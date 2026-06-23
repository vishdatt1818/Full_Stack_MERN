import Property from "./Property"

export default function PropertyList({proper}){
    return(
        <div>
            {proper.map((p) =>{
                return <Property {...p} key={p.id} />
            })}
        </div>
    )
}