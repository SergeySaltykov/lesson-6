import {loadUser} from 'modules/user/actions';
import Form from 'modules/user/components/Form';
import List from 'modules/user/components/List';
import {actions} from 'modules/user/constants';
import {userSelectorAction, userSelectorList} from 'modules/user/selectors';
import React from 'react';
import {connect} from 'react-redux';

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.loadUser();
    }

    render() {
        const {action, list} = this.props;
        if (action === actions.list) {
            return (
                <List list={list} />
            );
        }

        if (action === actions.edit) {
            return (
                <Form />
            );
        }

        return null;
    }
}

export default connect(
    (state) => ({
        action: userSelectorAction(state),
        list: userSelectorList(state),
    }),
    {
        loadUser,
    },
)(UserContainer);
