import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = props.user;
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.saveUser(this.state);
        this.props.closeUser();
    };

    onChange = (e) => {
        console.log(e.target);

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.onSubmit}>
              <table>
                  <tbody>
                    <tr>
                        <td colSpan={2}>
                           <img src={this.state.picture} alt="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="firstName">First name</label>
                        </td>
                        <td>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />
                        </td>
                    </tr>
                   <tr>
                        <td>
                            <label htmlFor="lastName">Last name</label>
                        </td>
                        <td>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.onChange}
                            />
                        </td>
                    </tr>
                  <tr>
                        <td>
                            <label htmlFor="company">Company</label>
                        </td>
                        <td>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                value={this.state.company}
                                onChange={this.onChange}
                            />
                        </td>
                    </tr>
                  <tr>
                        <td>
                            <label htmlFor="email">Company</label>
                        </td>
                        <td>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </td>
                    </tr>
                  <tr>
                    <td>
                        <button type="submit">Save</button>
                        {' '}
                        <button type="button" onClick={this.props.closeUser}>Close</button>
                    </td>
                  </tr>
                  </tbody>
              </table>

          </form>
        );
    }
}

export default Form;
