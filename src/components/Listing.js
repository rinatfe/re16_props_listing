import {Component} from 'react';
import PropTypes from 'prop-types';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.items = null;
    }

    static propTypes = {
        items:PropTypes.array
    }

    render() {
        const {items} = this.props;

        return(
            <div className="item-list">
                
            </div>
        );

    }

}