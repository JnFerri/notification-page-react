
interface teste {
    numNotifications : number
}

export  function NotificationsNumber({numNotifications }: teste){
    return (
        <span>{numNotifications}</span>
    )
}