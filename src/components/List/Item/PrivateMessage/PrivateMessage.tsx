import style  from "./PrivateMessage.module.scss"

interface propsMessagePrivate{
    messagePrivate: string
    select: boolean
}
export function PrivateMessage({messagePrivate,select} : propsMessagePrivate){
    return (<span>
        <span className={`${style.privateMessage__item} ${select && style.privateMessage__itemSelect}`}>
                            {messagePrivate}</span>
    </span>)
}