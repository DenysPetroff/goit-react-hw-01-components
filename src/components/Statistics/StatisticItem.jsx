// import PropTypes from 'prop-types';

import { Label, ListItem, Value } from "./StatisticItem.styled";

export const StatisticItem = ({ id, label, percentage }) => { 
    return (
    <ListItem className="item" key={id}>
      <Label className="label">{label}</Label>
      <Value className="percentage">{percentage}%</Value>
    </ListItem>
  );

}