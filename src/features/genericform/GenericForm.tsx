import React, {useState} from "react";
const axios = require('axios').default;

interface FormData {
    important: string
    error: string
}

interface Props {
    formName: string;
    ok?: boolean;
    i?: number;
    onSubmit: (value: any) => any;
    onClear: (value: any) => any;
    data?: FormData
}

export const GenericForm: React.FC<Props> = ({formName, onSubmit, onClear}) => {
    const [userName, setUserName] = useState<string>('');

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
                onChange={(event: any) => setUserName(event.target.value)}
                placeholder={formName}
                // ref={this.userNameInput}
                required
            />
            <button>Add card</button>
            <button onClick={event => (handleClear(event))}>Clear</button>
        </form>
    )

}
