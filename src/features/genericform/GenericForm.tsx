import React from "react";

const axios = require('axios').default;

class GenericForm extends React.Component {
	public props: any;
	public setState: any;
	public userNameInput: any;
    state = {userName: ''}
    handleSubmit = async (event) => {
        const url = 'https://api.github.com/users/';
        event.preventDefault();
        const response = await axios.get(url + `${this.state.userName}`)
        console.log('TOM' + response.data.toString())
        if (!response.data) {
            console.log('It is likely that UserName: ' + this.state.userName + ' was not found!');
        } else {
            this.props.onSubmit(response.data);
        }
        this.setState(() => ({userName: ''}))
    }

    handleClear = (event) => {
        this.setState(() => ({userName: ''}))
        this.props.onClear(event)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({userName: event.target.value})}
                    placeholder={this.props.formName}
                    ref={this.userNameInput}
                    required
                />
                <button>Add card</button>
                <button onClick={event => (this.handleClear(event))}>Clear</button>
            </form>
        )
    }
}

export default GenericForm;
