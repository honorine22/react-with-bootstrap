import React from 'react';

function GoalList(props) {
    return (
        <ul className='my-4 list-unstyled'>
            {props.goals.map(goal => (
                <li key={goal.key}>{goal.title}</li>
            ))}
        </ul>
    );
}

export default GoalList;