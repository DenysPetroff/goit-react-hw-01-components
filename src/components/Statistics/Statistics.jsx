// import { StatisticList } from "./StatisticList"



export const Statistics = ({title, stats }) => {
    return (
        <StatisticsSection>
            {title && <Title>{title}</Title>}

            <StatisticList>
                {stats.map(({ id, label, percentage }) => { 
                    <StatItem
                        id={id}
                        label={label}
                        percentage={percentage}
                        key={id}>
                    </StatItem>
                }
                )}
            </StatisticList>
         </StatisticsSection>

    )
 }