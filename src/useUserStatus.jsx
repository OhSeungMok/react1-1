import { useState, useEffect } from "react";

export default function useUserStatus(userId) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange)
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange)
        } 
    })
    return isOnline
}