import { Avatar, FriendContainer, StatusFriend, Name } from "./Friend.styled";
import PropTypes from 'prop-types';


export const Friend = ({ avatar, name, isOnline }) => { 
   return (
       <FriendContainer>
           <StatusFriend isOnline = {isOnline} ></StatusFriend>
           <Avatar src={avatar}/>
           <Name>{ name }
           </Name>
    </FriendContainer>
    )
};




Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};