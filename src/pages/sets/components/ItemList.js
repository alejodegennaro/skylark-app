import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSets, getIconUrl,iconsLoaded,imageUrlSuccess,iconsIsLoading } from '../actions';
import Item from './Item'


class ItemList extends Component {

    constructor(props) {
        super(props);
        this.fetchIcons = this.fetchIcons.bind(this);
    }

    componentDidMount(){
        if (!this.props.isReady){
            this.props.fetchData()
        }
    }

    componentDidUpdate() {
        if (this.props.isReady && !this.props.imagesLoaded) {
           this.fetchIcons();
        }
    }

    fetchIcons(){
        const {isLoadingIcons} = this.props;
        if(!isLoadingIcons){
            this.props.iconIsLoading(true);
            const icons = this.props.items.map((item,index) => this.props.loadIconUrl(item)
                .then((response) => response.json())
                .then((url) => this.props.imageUrlSuccess(index,url)));
            Promise.all(icons).then(resp => this.props.iconsLoaded());
        }
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading ) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={item.uid}>
                        {item.iconIsReady ? <Link to={`/sets/${item.uid}`}><Item {...item}/></Link> : "" }
                    </li>
                ))}
            </ul>

        );
    }
}

ItemList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    iconIsLoading: PropTypes.func.isRequired,
    iconsLoaded: PropTypes.func.isRequired,
    imageUrlSuccess: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isLoadingIcons: PropTypes.bool.isRequired,
    imagesLoaded: PropTypes.bool.isRequired,
    isReady: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.setsReducer.sets,
        hasErrored: state.setsReducer.hasErrored,
        isLoading: state.setsReducer.isLoading,
        isLoadingIcons: state.setsReducer.isLoadingIcons,
        imagesLoaded: state.setsReducer.imagesLoaded,
        isReady: state.setsReducer.isReady
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(getSets()),
        loadIconUrl: (index) => getIconUrl(index),
        iconsLoaded: (bool) => dispatch(iconsLoaded(bool)),
        iconIsLoading: (bool) => dispatch(iconsIsLoading(bool)),
        imageUrlSuccess: (index,url) => dispatch(imageUrlSuccess(index,url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
