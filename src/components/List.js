import React, { Component } from 'react';

class List extends Component {
    shouldComponentUpdate(newProps, newState) {
        if(newProps.data === this.props.data){
            return false;
        }
        return true;
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
            <dt key={data[i].id}>
                <a 
                href={"/content/" + data[i].id} 
                data-id={data[i].id}
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
                >{ data[i].title }</a>
            </dt>
            );
            i = i + 1;
        }

        return (
            <nav>
                <dl>
                    {lists}
                </dl>
            </nav>
        )
    }
}

export default List;