import React from 'react';
import CardList from '../../features/cardlist/CardList'
import GenericForm from '../../features/genericform/GenericForm'

export class GitHubCardApp extends React.Component {
	public setState: any;
	public props: any;
    state = {
        profiles: [],
    }

    addNewProfile = (profileData: any) => {
        this.setState((prevState: any) => ({
            profiles: [...prevState.profiles, profileData]
        }));
    };

    clearProfile = (event: any) => {
        event.preventDefault();
        this.setState(() => ({profiles: []}))
    }

    render() {
        return (
            <div>
                <div className="header"> {this.props.title}
                </div>
                <GenericForm formName='Github Username' onSubmit={this.addNewProfile} onClear={this.clearProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

