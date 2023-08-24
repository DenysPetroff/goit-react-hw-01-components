import { Friend } from "./Friend"
import { FriendItem, FriendUl } from "./FriendList.styled"
import PropTypes from 'prop-types';


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


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};