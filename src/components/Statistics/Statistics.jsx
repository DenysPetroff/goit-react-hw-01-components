import PropTypes from 'prop-types';

import { StatisticItem } from "./StatisticItem"
import { StatisticList, StatisticsSection, Title } from "./Statistics.styled"



export const Statistics = ({title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}

            <StatisticList>
                {stats.map(({ id, label, percentage }) => { 

                   return ( 
                    <StatisticItem
                        id={id}
                        label={label}
                        percentage={percentage}
                        key={id}>
                    </StatisticItem>)
                }
                )}
            </StatisticList>
         </StatisticsSection>

    )
}
 


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};