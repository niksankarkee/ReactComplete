import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconeName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly!',
        iconeName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const { text, iconeName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconeName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconeName} icon massive`} />
        </div>
    );
}

export default SeasonDisplay;