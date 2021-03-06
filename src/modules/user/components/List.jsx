import React from 'react';
import Item from 'modules/user/components/Item';

class List extends React.Component {

    renderItem = (id) => <Item key={id} id={id} />;

    render() {
        return (
            <table>
                <tbody>
                    {this.props.list.map(this.renderItem)}
                </tbody>
            </table>
        );
    }
}

export default List;
