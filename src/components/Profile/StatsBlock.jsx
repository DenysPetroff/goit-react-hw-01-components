import { StatsItem, StatsUl, StatsTitle, StatsValue } from "./StatsBlock.styled";
import PropTypes from 'prop-types';


export const StatsBlock = ({ stats: { followers, views, likes } }) => { 
    return (
        <StatsUl>
            <StatsItem>
                <StatsTitle>Followers</StatsTitle>
                <StatsValue>{followers}</StatsValue>
            </StatsItem>
            <StatsItem>
                <StatsTitle>Views</StatsTitle>
                <StatsValue>{views}</StatsValue>
            </StatsItem>
            <StatsItem>
                <StatsTitle>Followers</StatsTitle>
                <StatsValue>{likes}</StatsValue>
            </StatsItem>
        </StatsUl>

    )
}; 

StatsBlock.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired
}