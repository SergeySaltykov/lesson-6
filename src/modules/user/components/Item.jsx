import React from 'react';

class Item extends React.Component {
    onEdit = () =>  {
        this.props.editUser(this.props.user)
    };


    render() {
        const {
            user: {
                company,
                email,
                firstName,
                lastName,
                picture,
            }
        } = this.props;
        const fullName = `${firstName} ${lastName}`;

        return (
            <tr>
                <td>
                    <img src={picture} alt={fullName} />
                </td>
                <td>
                    {fullName}
                </td>
                <td>
                    {company}
                </td>
                <td>
                    <a href={`mailto:${email}`}>{email}</a>
                </td>
                <td>
                    <button onClick={this.onEdit}>Edit</button>
                </td>
            </tr>
        );
    }
}

export default Item;
