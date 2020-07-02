import React from 'react';
import { CardList } from '../../features/card-list/CardList';
import { GenericForm } from '../../features/generic-form/GenericForm';
import './GitHubCardApp.scss';
import {Card, Divider} from "antd";

export class GitHubCardApp extends React.Component {
    state = {
        profiles: [],
    };

    addNewProfile = (profileData: any) => {
        console.log('ProfileData:', profileData);
        this.setState((prevState: any) => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    clearProfile = (event: any) => {
        event.preventDefault();
        this.setState(() => ({ profiles: [] }));
    };

    render() {
        return (
            <Card>
                <div className="header"> Github Profile Info App</div>
                <GenericForm formName="Github Username" onSubmit={this.addNewProfile} onClear={this.clearProfile} />
                <Divider/>
                <CardList profiles={this.state.profiles} />
            </Card>
        );
    }
}
