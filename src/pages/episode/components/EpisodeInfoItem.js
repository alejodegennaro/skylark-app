import React from 'react';


export default function EpisodeInfoItem (props) {
       return (
            <div className="row set-item">
                <div className="col-3">
                    <p>{props.label}</p>
                </div>
                <div className="col-9 center-vertically">
                    <p>{props.value}</p>
                </div>
            </div>
            
        )
  };
