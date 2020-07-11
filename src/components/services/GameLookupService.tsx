/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
// import { HowLongToBeatService, HowLongToBeatEntry } from 'howlongtobeat';
let hltb = require('howlongtobeat');

let hltbService = new hltb.HowLongToBeatService();

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const axios = require('axios').default;

interface Props {
	formName: string;
	onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClear: (event: React.ChangeEvent<HTMLButtonElement>) => void;
	count?: number;
	ok?: boolean;
}

export const GameLookupService: React.FC<Props> = ({
	formName,
	onSubmit,
	onClear,
}) => {
	const [gameName, setGameName] = useState<string>('');
	// const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		hltbService.search(gameName).then((result: any[]) => {
			console.log(result);
			console.log('Login: ' + result[0].name.toString());
			if (!result[0]) {
				console.log(
					'It is likely that Game: ' + gameName + ' was not found!'
				);
			} else {
				onSubmit(result[0]);
			}
			setGameName('');
		});
	};

	const handleClear = (event: any) => {
		setGameName('');
		onClear(event);
	};

	return (
		<Form
			onKeyDown={(e) =>
				e.keyCode === 13 ? handleSubmit(e) || e.preventDefault() : ''
			}
		>
			<Form.Item>
				<Input
					type='text'
					value={gameName}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setGameName(event.target.value)
					}
					placeholder={formName}
					// ref={inputRef}
					required
				/>
				<Button onClick={handleSubmit}>Add card</Button>
				<Button onClick={(event) => handleClear(event)}>Clear</Button>
			</Form.Item>
		</Form>
	);
};
