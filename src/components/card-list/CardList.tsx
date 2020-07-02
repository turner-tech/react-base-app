import React from 'react';
import { Card } from '../card/Card';

export class CardList extends React.Component {
	public props: any;
	public profiles: any;

	render() {
		const { profiles } = this.props;
		return (
			<div>
				{profiles.map((profile: any) => (
					<Card key={profile.id} {...profile} />
				))}
			</div>
		);
	}
}
