import { useState } from "react"

const ConditionalRendering = () => {
    const [login , setLogin] = useState(false);

    if(login){
        return(
            <>
            <h1>UDAH LOGIN BANG</h1>
            <p>{login ? 'Kamu udah boleh masuk' : 'Kamu belum boleh masuk'}</p>
            <button onClick={function(){setLogin(false);}}>Logout</button>
            </>
        )
    }
        

    return( 
        <>
        <h1>Login dulu bang</h1>
        <p>{login ? 'Kamu udah boleh masuk' : 'Kamu belum boleh masuk'}</p>
        <button onClick={function(){
            setLogin(true);
        }}>Login</button>
        </>
    )
}

export default ConditionalRendering