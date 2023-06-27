import { useEffect, useState } from "react";

const LifeCycleEffect = () => {
    const [diklik, setDiklik] = useState(false);
    // useEffect digunakan untuk eksekusi function yang telah dibuat saat pertama dirender dan ketika ada perubahan
    const [count, setCount] = useState(0);

    useEffect(function(){
        console.log('Execute');
    });

    useEffect(function cekSatu(){
        console.log('Excecute count');
    }, [count])

    return(
        <>
        <h1 id="judul">Hello ini judul</h1>
        <button onClick={function(){
            setDiklik(true);
        }}>Klik aku dong</button>

        <h3>Nilai saat ini : {count}</h3>
        <button onClick={function(){
            setCount(count + 1);
        }}>
            Tambah bre
        </button>
        <br />
        <br />
        <h1>LIAT CONSOLE DI BROWSER</h1>
        </>
    )
}

export default LifeCycleEffect;