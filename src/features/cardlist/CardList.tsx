import React from 'react';
import Card from '../card/Card'

class CardList extends React.Component {
	public props: any;
	public profiles: any;

    render() {
        const {profiles} = this.props;
        return (<div>
            {profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>);
    }
}

// Keeping this in as a reference to how this is done as a variable instead of a class
const CardListAsVariable = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

export default CardList;
