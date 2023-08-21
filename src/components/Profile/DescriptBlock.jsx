import {WrapperDescr, Photo, Name, Tag, Location} from "./DescriptBlock.styled"
import PropTypes from 'prop-types';

export const DescriptBlock = ({items: { username, tag, location, avatar }}) => { 
    return (
        <WrapperDescr> 
            <Photo src={avatar} alt="User avatar" />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>

        </WrapperDescr>
    )
}

DescriptBlock.propTypes = {
    items: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }).isRequired
}