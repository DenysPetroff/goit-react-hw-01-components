import styled from 'styled-components';

export const StatisticsSection = styled.section`
         padding: 10px;
  background-color: #5874af;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  padding: 20px;
    text-align: center;
`

export const StatisticList = styled.ul`
    display: flex;
    justify-content: space-around;
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    background-color: #f7f7f7;
`