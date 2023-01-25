import {useState} from 'react'
import { INotifications } from "../../types/notifications"
import image0 from '../../assets/images/avatar-mark-webber.webp'
import image1 from '../../assets/images/avatar-angela-gray.webp'
import image2 from '../../assets/images/avatar-jacob-thompson.webp'
import image3 from '../../assets/images/avatar-rizky-hasanuddin.webp'
import Style from './List.module.scss'
import {v4 as uuidv4} from 'uuid'
import { Item } from './Item/Item'


function List() {
    const notifications = [
        {
            image: image0,
            name: 'Mark Webber',
            message:'reacted to your recent post',
            messagePrivate:``,
            messageClick:`My first tournament today!`,
            time:`01min`,
            select: false,
            id:uuidv4()
            
        },
        {
        image: image1,
        name: 'Angela Gray',
        message:'followed you',
        messagePrivate:``,
        messageClick:``,
        time:`05min`,
        select: false,
        id:uuidv4()
    },
    {
        image: image2,
        name: 'Jacob Thompson',
        message:'has joined your group',
        messagePrivate:``,
        messageClick:`Chess Club`,
        time:`01 day ago`,
        select: false,
        id:uuidv4()
    },
    {
        image: image3,
        name: 'Rizky Hasanuddin',
        message:'sent you a private message',
        messagePrivate:`Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`,
        messageClick:``,
        time:`5 days ago`,
        select: false,
        id:uuidv4()
    }
]

const [unreadNotifications, setUnreadNotifications] = useState(notifications.length)

const readNotification = () => {
   const num =  notifications.map(notification => )

    return(
        
            <section>
                <div>
                    <h3 className={Style.titulo}>notifications</h3>
                    <h4 >Mark all as read <strong>{unreadNotifications}</strong></h4>
                </div>
                <ul>
                    {notifications.map((notification, index)=>
                    <Item key={index}
                        {...notification}
                        />)}
                
                </ul>
            </section>
       
    )

    
}

export default List