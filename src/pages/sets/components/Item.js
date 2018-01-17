import React from 'react';


export default function Item (props) {
       return (
            <div className="row set-item">
                <div className="col-3">
                    <img src={props.imageUrl} alt="" width="50" height="50"/>
                </div>
                <div className="col-9 center-vertically">
                    <p>{props.title}</p>
                </div>
            </div>
        )
  };
