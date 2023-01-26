import { useState } from 'react'
import INotification from '../../types/notifications.js'
import Style from './List.module.scss'
import { Item } from './Item/Item'


function List({notifications}:{notifications : INotification[]}) {
    
    return (

        <section>
            <div>
                <h3 className={Style.titulo}>notifications</h3>
                <h4 >Mark all as read <strong></strong></h4>
            </div>
            <ul>
                {notifications.map((notification, index) =>
                    <Item key={index}
                        {...notification}
                    />)}

            </ul>
        </section>

    )


}

export default List