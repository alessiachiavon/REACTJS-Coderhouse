import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [repEmail, setRepEmail] = useState('')

    const handConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, repEmail
        }

        onConfirm(userData)
    }

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', width:800}}>
            <form onSubmit={handConfirm}>
                <div>
                    <label style={{width:500, textAlign:'initial', marginTop:50}}>
                    NOMBRE 
                    <input type="text" value={name} onChange={({ target }) => setName(target.value)}
                    style={{width:500, borderTop:'none', borderLeft:'none', borderRight:'none'}}/>
                    </label>
                </div>
                <div>
                    <label style={{width:500, textAlign:'initial', marginTop:50}}>
                    TELÉFONO
                    </label>
                    <input type="text" value={phone} onChange={({ target }) => setPhone(target.value)}
                    style={{width:500, borderTop:'none', borderLeft:'none', borderRight:'none'}}/>
                </div>
                <div>
                    <label style={{width:500, textAlign:'initial', marginTop:50}}>
                    CORREO ELECTRÓNICO
                    <input type="email" value={email} onChange={({ target }) => setEmail(target.value)}
                    style={{width:500, borderTop:'none', borderLeft:'none', borderRight:'none'}}/>
                    </label>
                </div>
                <div>
                    <label style={{width:500, textAlign:'initial', marginTop:50}}>
                    REPETIR CORREO ELECTRÓNICO
                    <input type="email" value={repEmail} onChange={({ target }) => setRepEmail(target.value)}
                    style={{width:500, borderTop:'none', borderLeft:'none', borderRight:'none'}}/>
                    </label>
                </div>
                <div>
                    <button type='submit' style={{marginTop:30, height:40, padding:7, border:'none', color:'white', backgroundColor: 'grey', borderRadius:10}}>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}



export default CheckoutForm