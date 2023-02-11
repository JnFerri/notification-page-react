import { Props } from "../../../types/Props"




export default function markAllAsRead({notifications,selectNotification,setNotification,setNumNotification,numNotifications}: Props){
    
    function markAllAsRead(){
        setNumNotification(0)
        setNotification(Notification => Notification.map(notification => ({...notification, select : true})))
    }

    return (
        <span onClick={markAllAsRead}>Mark all as read </span>
    )
}