import { useState } from 'react'
import INotifications from '../../types/notifications.js'
import Style from './List.module.scss'
import { Item } from './Item/Item'

interface Props{
    notifications:INotifications[],
    selectNotification: (notificationSelected:INotifications) => void
    setNotification:React.Dispatch<React.SetStateAction<INotifications[]>>
}


function List ({notifications, selectNotification,setNotification}: Props) {
    
    const [numNotifications, setNumNotification] = useState(notifications.length)
    function markAllAsRead(){
        setNumNotification(0)
        setNotification(Notification => Notification.map(notification => ({...notification, select : true})))
    }
    return (

        <section>
            <div>
                <h3 className={Style.titulo}>notifications</h3>
                <div><h4 onClick={markAllAsRead}>Mark all as read </h4> <div>{numNotifications}</div></div>
            </div>
            <ul>
                {notifications.map((notification) =>
                    <Item
                    numNotifications = {numNotifications}
                    setNumNotification = {setNumNotification}
                    key={notification.id}
                        selectNotification = {selectNotification}
                        {...notification}
                    />)}

            </ul>
        </section>

    )


}

export default List