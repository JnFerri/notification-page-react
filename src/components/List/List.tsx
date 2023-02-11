import { useState } from 'react'
import INotifications from '../../types/notifications'
import Style from './List.module.scss'
import { Item } from './Item/Item'
import { NotificationsNumber } from './NotificationsNumber/NotificationsNumber'
import  MarkAllAsRead  from './MarkAllAsRead/MarkAllAsRead'
import { Props } from '../../types/Props'


function List ({notifications, selectNotification,setNotification,numNotifications,setNumNotification}: Props) {
    
    return (

        <section>
            <div>
                <h3 className={Style.titulo}>notifications</h3>
                <div>
                    <MarkAllAsRead
                    notifications = {notifications}
                    numNotifications = {numNotifications}
                    setNumNotification = {setNumNotification}
                    setNotification = {setNotification}
                    selectNotification = {selectNotification}
                    {...notifications}
                    /> 

                    <NotificationsNumber 
                    numNotifications = {numNotifications}
                    />

                    </div>
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