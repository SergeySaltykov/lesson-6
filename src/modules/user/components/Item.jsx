import {removeUser, editUser} from 'modules/user/actions';
import {userSelectorItem} from 'modules/user/selectors';
import React from 'react';
import {connect} from 'react-redux';

class Item extends React.Component {
    onEdit = () =>  {
        this.props.editUser(this.props.user)
    };

    onDelete = () =>  {
        // console.log(this.props.user);
        this.props.removeUser(this.props.user)
    };


    render() {
        if (!this.props.user) {
            return null;
        }

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
                <td>
                    <button onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default connect(
    (state, props) => ({
        user: userSelectorItem(state, props.id),
    }),
    {
        editUser,
        removeUser,
    },
)(Item);
