import React from 'react';
import {utils} from "../../../utils/MathLogic";

export class StarsDisplay extends React.Component {
    render() {
        const {stars} = this.props;
        return (
            <div className="star-display">
                {utils
                    .range(1, stars)
                    .map(starId =>
                        <div key={starId} className="star"/>
                    )}
            </div>
        )
    }
}
