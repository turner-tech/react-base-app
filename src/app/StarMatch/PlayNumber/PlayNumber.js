import React from 'react';

export class PlayNumber extends React.Component {
    render() {
        const {numId, numStatus, onClick} = this.props;
        return (
            <button
                className="number"
                style={{backgroundColor: colors[numStatus]}}
                onClick={() => onClick(numId, numStatus)}>
                {numId}
            </button>
        )
    }
}

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
