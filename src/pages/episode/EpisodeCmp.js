import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getEpisodes, episodeResetStore } from './actions';
import EpisodeInfo from './components/EpisodeInfo'

class EpisodeCmp extends Component{

    componentDidMount(){
        this.props.resetStore();
    }

    componentDidUpdate() {
        const { match: { params } } = this.props;

        //find the selected item to make API call to fetch the proper data using its content_url
        let episodeUid = this.props.items.find(element => element.uid === params.id);
        if (!this.props.isReady){
            this.props.fetchEpisode(episodeUid)
        }
    }

    render(){

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading ) {
            return <p>Loading…</p>;
        }
        const {episode} = this.props;
        return (
            <div className="container">
              <h3>Episode Info</h3>
              <EpisodeInfo {...episode}/>
            </div>
        )}
}

EpisodeCmp.propTypes = {
    fetchEpisode: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    episode: PropTypes.object.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isReady: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => {
    return {
        items: state.setsReducer.sets,
        episode: state.episodeReducer.episode,
        hasErrored: state.episodeReducer.hasErrored,
        isLoading: state.episodeReducer.isLoading,
        isReady: state.episodeReducer.isReady,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEpisode: (uid) => dispatch(getEpisodes(uid)),
        resetStore: () => dispatch(episodeResetStore()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EpisodeCmp));
