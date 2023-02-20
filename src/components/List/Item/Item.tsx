import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import  INotifications  from "../../../types/notifications"
import style from './Item.module.scss'

interface Props extends INotifications{
    selectNotification: (notificationSelected:INotifications) => void
    numNotifications: number 
    setNumNotification: React.Dispatch<React.SetStateAction<number>>
}

export function Item({image,name,message,messageClick,messagePrivate,time,select,id,selectNotification,numNotifications,setNumNotification}:Props){
    
    function handle(){
        selectNotification({ image,name,message,messageClick,messagePrivate,time,select,id})
        
        select ?
        setNumNotification(numNotifications - 0) : setNumNotification(numNotifications -1 )
    }


    return(
        <li className = {`${style.notification} ${select && style.notificationSelect}`}
        onClick = {handle}>
                <div className={style.notification__item}>
                        <img src={image} alt=""/>
                        <p><strong>{name} </strong>{message} <a>{messageClick}</a></p>
                </div>
                        <p>{time}</p>
                        <span className="">{messagePrivate}</span>
                </li>
    )
}