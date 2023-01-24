import { INotifications } from "../../../types/notifications"


export function Item({image,name,message,messageClick,messagePrivate,time,id}:INotifications){
    
    return(
        <li>
                    <img src={image} alt=""/>
                    <p><strong>{name} </strong>{message} <a>{messageClick}</a></p>
                    <span>{messagePrivate}</span>
                    <p>{time}</p>
                </li>
    )
}