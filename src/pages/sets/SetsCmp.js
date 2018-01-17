import React, { Component } from 'react';
import ItemList from './components/ItemList';

export default class SetsCmp extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return (
            <div className="container">
                <div className=" row">
                  <div className="col-3 ">
                    <h3>Image</h3>
                  </div>
                  <div className="col-9 ">
                   <h3>Title</h3>
                  </div>
                </div>
                <ItemList/>
            </div>
        )}
}
