import { useRef, useState } from "react";

const ReactForm = () => {

    const namaRef = useRef(null);

    const [nama2, setnama2] = useState('');

    function ketikaSubmit(event){
        event.preventDefault();
        console.log('Aku disubmit');
        const nama = namaRef.current.value;

        console.log(nama);
        console.log(nama2);
    }
    return(
        <>
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama : </label>
                <input type="text" name="nama" ref={namaRef}/>
                <br /><br />
                <label>Nama useState : </label>
                <input type="text" name="namaUseState" onChange={function(event){
                    setnama2(event.target.value);
                }}/>
            </div>
            <button type="submit">Kirim</button>
        </form>
        </>
    )
}

export default ReactForm