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
                        <div className={style.image__box}><img className={style.image__item} src={image} alt=""/></div>
                <div className={style.notification__item}>
                        <p className={style.text__item}><strong className={style.item__name}>{name} </strong>{message} <a className={style.text__itemLink}>{messageClick}</a></p>
                            <span className={style.item__time}>{time}</span>
                            <span className={`${style.privateMessage__item} ${select && style.privateMessage__itemSelect}`}>{messagePrivate}</span>
                </div>
                        
                </li>
    )
}