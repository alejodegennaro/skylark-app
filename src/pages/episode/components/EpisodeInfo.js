import React from 'react';
import EpisodeInfoItem from './EpisodeInfoItem'

export default function EpisodeInfo (props) {
       return (
        <div>
            <EpisodeInfoItem label="Title" value={props.title}/>
            <EpisodeInfoItem label="Slug" value={props.slug}/>
            <EpisodeInfoItem label="Publish on" value={props.publish_on}/>
            <EpisodeInfoItem label="Subtitle" value={props.subtitle}/>
            <EpisodeInfoItem label="Created" value={props.created}/>
            <EpisodeInfoItem label="Episode Number" value={props.episode_number}/>
            <EpisodeInfoItem label="Modified" value={props.modified}/>
            <EpisodeInfoItem label="Modified By" value={props.modified_by}/>
            <EpisodeInfoItem label="Language Version Number" value={props.language_version_number}/>
            <EpisodeInfoItem label="Language Modified" value={props.language_modified}/>
        </div>
        )
  };
