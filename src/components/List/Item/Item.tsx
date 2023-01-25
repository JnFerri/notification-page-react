import { useState } from "react"
import { INotifications } from "../../../types/notifications"


export function Item({image,name,message,messageClick,messagePrivate,time,id}:INotifications){
    
    const [styleItem,setStyle] = useState( {
        item:{
            background:'hsl(205, 33%, 90%)'
        },
        
    })

   const changeBackgroundColor=() => {
    setStyle({
        item: {
            background:'white'
        }
    })

    }
    return(
        <li style={styleItem.item} onClick = {changeBackgroundColor}>
                    <img src={image} alt=""/>
                    <p><strong>{name} </strong>{message} <a>{messageClick}</a></p>
                    <span>{messagePrivate}</span>
                    <p>{time}</p>
                </li>
    )
}