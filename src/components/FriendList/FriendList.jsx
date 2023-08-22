import { Friend } from "./Friend"
import { FriendItem, FriendUl } from "./FriendList.styled"


export const FriendList = ({ friends }) => { 
    return (
        <FriendUl>
            {friends.map(item => { 
                return (
                <FriendItem key={item.id}>
                    <Friend avatar={item.avatar} name={item.name} isOnline={item.isOnline}></Friend>
                    </FriendItem>
                     )})}
        </FriendUl>
    )
    
} 