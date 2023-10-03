import React from "react";
import { useForm } from "react-hook-form"
import{useHookFormMask}from'use-mask-input'

const OrderForm = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({mode: "onChange"});
    const registerWithMask = useHookFormMask(register);
    const users = {
        name: '',
        email: '',
        phone: '',
        description: ''
    }
    let h2OrderForm = "Сделать заказ";
    const onSubmit = data =>{
       
        console.log(data)
        reset()
    }
    return(
        <div className='block' id="orderForm" >
            <h2 className='h2Block'>{h2OrderForm}</h2>
            <form onSubmit={
            handleSubmit(onSubmit)}>
                <label htmlFor="name">Имя*</label><br />
                <input {...register("name", {required: 'Введите имя'})} 
                className="formInput" id="name" type="text" placeholder="Петр" /><br />
                {
                    errors?.name && (
                        <div style={{color: 'red'}}>{errors.name.message}</div>
                    )
                }

                <label htmlFor="email">Почта*</label><br />
                <input {...register("email", {required: 'Введите почту', 
                                                pattern:{
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i ,
                                                    message: 'Введите правильно почту (пример: petr@gmail.com)'
                                                }})} 
                className="formInput" id="email" type="email" placeholder="petr@gmail.com"></input><br />
                {
                    errors?.email && (
                        <div style={{color: 'red'}}>{errors.email.message}</div>
                    )
                }

                <label htmlFor="phone">Телефон*</label><br />
                <input  {...registerWithMask("phone",['+7(999) 999 99 99'], {
                                            required: "Введите телефон"
                                            })} 
                className="formInput" id="phone" type="phone" placeholder="+7(999) 999 99 99" ></input><br />
                {
                    errors?.phone && (
                        <div style={{color: 'red'}}>{errors.phone.message}</div>
                    )
                }

                <label htmlFor="description">Описание*</label><br />
                <textarea {...register("description", {required:  'Введите описание проекта'})}
                id="description" className="comment" cols="40" rows="3"></textarea><br />
                {
                    errors?.description && (
                        <div style={{color: 'red'}}>{errors.description.message}</div>
                    )
                }

                <input id="buttonOrderForm" type="submit" value="Заказать"></input>
            </form>
        </div>
        
    )
}

export default OrderForm