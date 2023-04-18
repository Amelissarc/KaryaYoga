import React, { useState } from 'react'
import InputForm from './InputForm';

export default function CheckoutForm({onCheckout}) {
    const [userData, setUserData] = useState({      
        name: "",
        lastName: "",
        email: "",
        address: "",
        cp: "",
        paymentMethod: "debit"
        //No guardo los datos de pago ya que solo es una simulacion
    });

    function onInputChange(evt){
        let value = evt.target.value;
        let key = evt.target.name;
    
        let newState = { ...userData };
        newState[key] = value;
        setUserData(newState);
    }

    function handleSubmit(evt){
        evt.preventDefault();
        onCheckout(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4 className="mb-3">Datos del Envío</h4>
            <div className="row g-3">
                <InputForm divClass="col-sm-6" id="name" name="name" text="Nombre" type="text" pattern="[a-zA-Z ]+" onChange={onInputChange}/>
                <InputForm divClass="col-sm-6" id="lastName" name="lastName" text="Apellido" type="text" pattern="[a-zA-Z ]+" onChange={onInputChange}/>
                <InputForm divClass="col-12" id="email" name="email" text="Email" type="email" placeholder="nombre@ejemplo.com" pattern={null} onChange={onInputChange}/>
                <InputForm divClass="col-9" id="address" name="address" text="Dirección" type="text" placeholder="Calle 123, Ciudad, Provincia" onChange={onInputChange}/>
                <InputForm divClass="col-md-3" id="cp" name="cp" text="Código Postal" type="text" onChange={onInputChange}/>
            </div>
            
            <hr className="my-4" />

            <h4 className="mb-3">Forma de Pago</h4>
            <div className="my-3">
                <InputForm divClass="form-check" id="debit" name="paymentMethod" value="debit" text="Tarjeta de Débito" type="radio" defaultChecked="true" onChange={onInputChange}/>
                <InputForm divClass="form-check" id="credit" name="paymentMethod" value="credit" text="Tarjeta de Crédito" type="radio" onChange={onInputChange}/>
            </div>
            <div className="row gy-3">
                <div className="col-md-6">
                    <InputForm id="cc-name" name="ccName" text="Nombre" type="text" />
                    <small className="text-muted">Nombre como figura en la tarjeta</small>
                </div>
                <InputForm divClass="col-md-6" id="cc-number" name="ccNumber" text="Número de la Tarjeta" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="[0-9]{16}"/>
                <InputForm divClass="col-md-3" id="cc-expiration" name="ccExpiration" text="Vencimiento" type="text" placeholder="mm/aa" pattern="[0-9/]{5}"/>
                <InputForm divClass="col-md-3" id="cc-cvv" name="ccCvv" text="CVV" type="text" placeholder="xxx" pattern="[0-9]{3}"/>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">Finalizar Compra</button>
        </form>
    )
}