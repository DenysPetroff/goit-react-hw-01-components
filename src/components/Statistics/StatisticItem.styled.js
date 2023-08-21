import styled from 'styled-components';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const ListItem = styled.li`
    margin-top: 20px;
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${getRandomHexColor};
`;


export const Label = styled.span`
    color: yellow;
`

export const Value = styled.span`
    color: yellow;
`