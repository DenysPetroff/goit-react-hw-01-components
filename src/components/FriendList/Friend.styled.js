import styled from 'styled-components';



export const FriendContainer = styled.div`
padding: 5px;
       width: 200px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       margin-left: 5px;
       margin-right: 5px;
       
`

const getStatusBcgColor = ({ isOnline }) => {
  return isOnline ? 'green' : 'red';
};

export const StatusFriend = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${getStatusBcgColor};


`

export const Avatar = styled.img`
       width: 50px;
       border-radius: 4px;

`

export const Name = styled.p`
   font-size: 24px;
`

