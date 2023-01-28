import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import  INotifications  from "../../../types/notifications"
import style from '../List.module.scss'

interface Props extends INotifications{
    selectNotification: (notificationSelected:INotifications) => void
    lessNum:(value:number) => void
}

export function Item({image,name,message,messageClick,messagePrivate,time,select,id,selectNotification,lessNum}:Props){
    
    function handle(){
        selectNotification({ image,name,message,messageClick,messagePrivate,time,select,id})
        if(select === true ){lessNum(1)}
    }


    return(
        <li className = {`${style.notification} ${select ? style.notificationSelected : ''}`}
        onClick = {handle}>
                    <img src={image} alt=""/>
                    <p><strong>{name} </strong>{message} <a>{messageClick}</a></p>
                    <span>{messagePrivate}</span>
                    <p>{time}</p>
                </li>
    )
}