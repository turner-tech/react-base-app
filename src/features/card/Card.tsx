import React from "react";

export class Card extends React.Component {
	public props: any;

    render() {
        const profile = this.props;
        return (
            <div className="github-profile" style={{margin: '1rem'}}>
                <img src={profile.avatar_url} alt='' style={{width: 'auto', maxHeight: '200px'}}/>
                <div className="info" style={{display: 'inline-block', marginLeft: 10}}>
                    <div className="name"
                         style={{fontSize: '150%', fontWeight: 'bold', marginBottom: '10px'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}
