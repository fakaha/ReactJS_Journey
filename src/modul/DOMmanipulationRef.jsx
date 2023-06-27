import { useEffect, useRef } from "react";

const DOMmanipulationRef = () => {

    const judulRef = useRef(null);

    useEffect(function() {
        console.log(judulRef);
        // const judul = document.getElementById('judul');
        // setTimeout(function (){
        //     judul.textContent = 'Aplikasi';
        // }, 1000)

        // PENGGANTI PAKAI GET ELEMENT
        setTimeout(function(){
            judulRef.current.textContent = 'Aplikasi useRef';
        }, 1000);
    }, [])
    
    
    return(
        <>
        <h1 ref={judulRef}>Application</h1>
        </>
    )
}

export default DOMmanipulationRef;