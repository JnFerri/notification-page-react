import {useState} from 'react'
import { INotifications } from "../../types/notifications"
import image0 from '../../assets/images/avatar-mark-webber.webp'
import image1 from '../../assets/images/avatar-angela-gray.webp'
import image2 from '../../assets/images/avatar-jacob-thompson.webp'
import image3 from '../../assets/images/avatar-rizky-hasanuddin.webp'


function List() {
    const notifications = [
        {
            image: image0,
            name: 'Mark Webber',
            message:'reacted to your recent post',
            messagePrivate:``,
            messageClick:`My first tournament today!`,
            time:`01min`,
            select: false
        },
        {
        image: image1,
        name: 'Angela Gray',
        message:'followed you',
        messagePrivate:``,
        messageClick:``,
        time:`05min`,
        select: false
    },
    {
        image: image2,
        name: 'Jacob Thompson',
        message:'has joined your group',
        messagePrivate:``,
        messageClick:`Chess Club`,
        time:`01 day ago`,
        select: false
    },
    {
        image: image3,
        name: 'Rizky Hasanuddin',
        message:'sent you a private message',
        messagePrivate:`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        messageClick:``,
        time:`5 days ago`,
        select: false
    }
]
    return(
        
            <section>
                <div>
                    <h3>notifications</h3>
                    <h4>Mark all as read</h4>
                </div>
                <ul>
                    {notifications.map((notification, index)=>
                    (<li>
                    <img src={notification.image} alt=""/>
                    <p><strong>{notification.name} </strong>{notification.message} <a>{notification.messageClick}</a></p>
                    <span>{notification.messagePrivate}</span>
                    <p>{notification.time}</p>
                </li>))}
                
                </ul>
            </section>
       
    )

    
}

export default List