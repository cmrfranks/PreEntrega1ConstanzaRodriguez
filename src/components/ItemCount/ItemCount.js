import React from "react";

function ItemCount (props) {
    const [count, setCount] = React.useState(0)

    function handleSubstract(){
        setCount(count -1)
    }

    return(
    <div className="divCount">
        <button disabled={ count<=1 } onClick= { handleSubstract }>-</button>
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1)}>+</button>
    </div>
    )
}

export default ItemCount;