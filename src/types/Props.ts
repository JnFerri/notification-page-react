import INotifications from "./notifications"

export interface Props{
    notifications:INotifications[]
    selectNotification: (notificationSelected:INotifications) => void 
    setNotification:React.Dispatch<React.SetStateAction<INotifications[]>>
    setNumNotification : React.Dispatch<React.SetStateAction<number>>
    numNotifications : number
}