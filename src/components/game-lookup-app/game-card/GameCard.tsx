import React from 'react';
import Meta from 'antd/es/card/Meta';
import { Card as AntCard } from 'antd';

export class GameCard extends React.Component {
	public props: any;

	render() {
		const profile = this.props;
		return (
			<AntCard
				hoverable
				style={{ width: 240 }}
				cover={<img alt='example' src={profile.imageUrl} />}
			>
				<h1>{profile.name}</h1>
				<Meta
					description={profile.description}
				/>
				<p/>
				<p>Main({profile.gameplayMain} hrs)</p>
				<p>Main+Extra({profile.gameplayMainExtra} hrs)</p>
				<p>Completionist({profile.gameplayCompletionist} hrs)</p>
				<p>{profile.playableOn[0] ? 'Playable on: ' + profile.playableOn.toString() : ''}</p>
			</AntCard>
		);
	}
}
