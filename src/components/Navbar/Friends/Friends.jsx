import React from 'react';

const Friends = (props) => {
    return (
        <div>
            <div>
                <img src={props.image} alt={`${props.name} avatar`}/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default Friends;