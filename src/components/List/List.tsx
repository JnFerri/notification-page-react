import { useState } from 'react'
import INotifications from '../../types/notifications.js'
import Style from './List.module.scss'
import { Item } from './Item/Item'

interface Props{
    notifications:INotifications[],
    selectNotification: (notificationSelected:INotifications) => void
    lessNum: (value:number) => void
    numNotification : number
}


function List ({notifications, selectNotification,lessNum,numNotification}: Props) {
    
    return (

        <section>
            <div>
                <h3 className={Style.titulo}>notifications</h3>
                <h4 >Mark all as read <strong>{numNotification}</strong></h4>
            </div>
            <ul>
                {notifications.map((notification) =>
                    <Item key={notification.id}
                        selectNotification = {selectNotification}
                        lessNum = {lessNum}
                        {...notification}
                    />)}

            </ul>
        </section>

    )


}

export default List