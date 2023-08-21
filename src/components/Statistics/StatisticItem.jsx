import PropTypes from 'prop-types';

import { Label, ListItem, Value } from "./StatisticItem.styled";

export const StatisticItem = ({ id, label, percentage }) => { 
    return (
    <ListItem className="item" key={id}>
      <Label className="label">{label}</Label>
      <Value className="percentage">{percentage}%</Value>
    </ListItem>
  );

}



StatisticItem.propTypes = {
    id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};