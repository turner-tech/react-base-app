import React from 'react';
import {CardList} from '../../features/cardlist/CardList'
import {GenericForm} from '../../features/genericform/GenericForm'

export class GitHubCardApp extends React.Component {
    state = {
        profiles: [],
    }

    addNewProfile = (profileData: any) => {
        console.log('ProfileData:', profileData);
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
                <div className="header" > Github Profile Info App</div>
                <GenericForm formName='Github Username' onSubmit={this.addNewProfile} onClear={this.clearProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}

