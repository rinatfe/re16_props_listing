import {Component} from 'react';
import PropTypes from 'prop-types';

class Listing extends Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
    }

    static propTypes = {
        items:PropTypes.array
    }

    render() {
        const {items} = this.props;
        return(
            <div className="item-list">
               {items.map(i => {
                   let titleStyle;
                   let style;
                   if(i.title == undefined) {
                       return false;
                   }
                   if(i.title.length > 50) {
                    titleStyle = 'item-title long';
                   } else {
                      titleStyle = 'item-title';
                   }
                   if(i.quantity <= 10) {
                       style = 'level-low';
                   }else if(i.quantity <=20) {
                       style = 'level-medium';
                   } else {
                        style = 'level-high';
                   }
                   return (
                        <div key={i.listing_id} classNAme="item">
                            <div className="item-image">
                                <a href={i.url}>
                                    <img src={i.MainImage.url_570xN} />
                                </a>
                            </div>
                            <div key={i.listing_id} className="item-details">
                                <p className={titleStyle}>{i.title}</p>
                                <p className="item-price">{`${i.currency_code} ${i.price}`}</p>
                                <p className={`item-quantity ${style}`}>{i.quantity} left</p>
                            </div>
                        </div>
                    )})}
            </div>
        );

    }

}

export default Listing;