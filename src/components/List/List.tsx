import {useState} from 'react'
import { INotifications } from "../../types/notifications"
import image1 from '../../assets/images/avatar-angela-gray.webp'

function List() {
    const notifications = [{
        image: image1,
        name: 'angela',
        message:'ola teste',
        select: false
    }]
    return(
        <ul>
            {notifications.map((notification, index)=>
            (<li>
            <img src={notification.image} alt=""/>
            <h3>{notification.name}</h3>
            <p>{notification.message}</p>

        </li>))}
            
        </ul>
    )

    
}

export default List