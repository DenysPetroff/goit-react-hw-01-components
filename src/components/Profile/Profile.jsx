import { Wrapper } from "./Profile.styled"
import { DescriptBlock } from "./DescriptBlock"
import { StatsBlock } from "./StatsBlock"
import PropTypes from 'prop-types';

export const Profile = ({items}) => { 

    return (
        <Wrapper>
            <DescriptBlock items={items} />
            <StatsBlock stats={items.stats} />
        </Wrapper>

    )
}

Profile.propTypes = {
    items: PropTypes.object,
}