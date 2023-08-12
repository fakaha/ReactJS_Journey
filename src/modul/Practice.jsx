import { useState } from "react";

const Practice = () =>{
    const [login, setLogin] = useState(false);
    const [angka, setAngka] = useState(0);

    if(login){
        return(
            <>
            <h1>Selamat datang di aplikasi buatan saya</h1>
            <p>{login ? 'Anda telah login' : 'Silahkan klik login terlebih dahulu'}</p>
            <button onClick={function(){
            setLogin(false);
            }}>Login</button>

            <div className="angka" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
            <button onClick={function(){
            setAngka(angka * -1)
            }}>Negatif</button>
            <button onClick={function(){
            setAngka(angka / 10)
            }}>/</button>
            <button onClick={function(){
            setAngka(angka - 1)
            }}>-</button>
            <h3>{angka}</h3>
            <button onClick={function(){
            setAngka(angka + 1)
            }}>+</button>
            <button onClick={function(){
            setAngka(angka * 10)
            }}>*</button>
            <button onClick={function(){
            setAngka(angka * 1)
            }}>Positif</button>
            <input type="number" onChange={function(event){
            setAngka(Number(event.target.value));
            }} value={angka}/>
            </div>
            </>
        )
    }
    return(
        <>
        <h1>Practice Zone</h1>
        <br /><br />

        <p>{login ? 'Anda telah login' : 'Silahkan klik login terlebih dahulu'}</p>
        <button onClick={function(){
            setLogin(true);
        }}>Login</button>
        {/* <div className="angka" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <button onClick={function(){
            setAngka(angka * -1)
        }}>Negatif</button>
        <button onClick={function(){
            setAngka(angka / 10)
        }}>/</button>
        <button onClick={function(){
            setAngka(angka - 1)
        }}>-</button>
        <h3>{angka}</h3>
        <button onClick={function(){
            setAngka(angka + 1)
        }}>+</button>
        <button onClick={function(){
            setAngka(angka * 10)
        }}>*</button>
        <button onClick={function(){
            setAngka(angka * 1)
        }}>Positif</button>
        <input type="number" onChange={function(event){
            setAngka(Number(event.target.value));
        }} value={angka}/>
        </div> */}
        </>
    )
}
export default Practice;