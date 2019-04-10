import Form from 'modules/user/components/Form';
import List from 'modules/user/components/List';
import {actions} from 'modules/user/constants';
import React from 'react';

class UserContainer extends React.Component {
    constructor(props) {
        super(props);

        this.load();
    }


    state = {
        action: actions.list,
        id: 0,
        data: {},
        list: [],

    };

    async load() {
        const userList = await this.fetch();
        const data = userList.reduce(this.getData, {});
        const list = userList.map(this.getList);

        this.setState({
            data,
            list,
        });
    }

    getData = (prev, user) => ({
        ...prev,
        [user.id]: user,
    });

    getList = (user) => user.id;

    editUser = (user) => {
        this.setState({
            action: actions.edit,
            id: user.id,
        })
    };

    closeUser = () => {
        this.setState({
            action: actions.list,
            id: 0,
        })

    };

    saveUser = (user) => {
      this.setState((state) => ({
          ...state,
          data: {
              ...state.data,
              [user.id]: user,
          },
      }));
    };



    async fetch() {
        const response = await fetch('/api/v1/user.json');
        const {data} = await response.json();

        return data.list;
    }

    render() {
        const {action, data, list, id} = this.state;

        if (action === actions.list) {
            return (
                <List data={data} list={list} editUser={this.editUser} closeUser={this.closeUser} />
            );
        }

        if (action === actions.edit) {
            return (
                <Form  closeUser={this.closeUser} user={data[id]} saveUser={this.saveUser}/>
            );
        }

        return null;
    }
}

export default UserContainer;
