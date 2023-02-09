import { useContext } from "react";
import { userContext } from "../../App";

function UserMenu(){
    useContext(userContext)
    return (
        <div>
            <p>Usuario: </p>
        </div>
    )
}

export default UserMenu;