import React, {useRef, useState} from "react";
const axios = require('axios').default;

interface Props {
    formName: string;
    onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: (event: React.ChangeEvent<HTMLButtonElement>) => void;
    count?: number;
    ok?: boolean;
}

export const GenericForm: React.FC<Props> = ({formName, onSubmit, onClear}) => {
    const [userName, setUserName] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (event: any) => {
        const url = 'https://api.github.com/users/';
        event.preventDefault();
        const response = await axios.get(url + `${userName}`)
        console.log('Login: ' + response.data.login.toString())
        if (!response.data) {
            console.log('It is likely that UserName: ' + userName + ' was not found!');
        } else {
            onSubmit(response.data);
        }
        setUserName('');
    }

    const handleClear = (event: any) => {
        setUserName('')
        onClear(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}
                placeholder={formName}
                ref={inputRef}
                required
            />
            <button>Add card</button>
            <button onClick={event => (handleClear(event))}>Clear</button>
        </form>
    )
}
