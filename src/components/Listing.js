import {Component} from 'react';
import PropTypes from 'prop-types';

class Listing extends Component {
    constructor(props) {
        super(props);
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
                   let currencyCode;
                   if(i.title == undefined) {
                       return false;
                   }
                   if(i.title.length > 50) {
                    titleStyle = i.title.slice(0, 47) + '...';
                   } else {
                      titleStyle = i.title;
                   }
                   if(i.quantity <= 10) {
                       style = 'level-low';
                   }else if(i.quantity <=20) {
                       style = 'level-medium';
                   } else {
                        style = 'level-high';
                   }
                   if(i.currency_code == "USD") {
                       currencyCode = "$"
                   } else if(i.currency_code == "EUR") {
                       currencyCode = "€"
                   } else if(i.currency_code == "CAD") {
                        currencyCode = "C$"
                   } else if(i.currency_code == "GBP") {
                       currencyCode = "£"
                   }
                   return (
                        <div key={i.listing_id} classNAme="item">
                            <div className="item-image">
                                <a href={i.url}>
                                    <img src={i.MainImage.url_570xN} />
                                </a>
                            </div>
                            <div key={i.listing_id} className="item-details">
                                <p className="item-title">{titleStyle}</p>
                                <p className="item-price">{`${currencyCode} ${i.price}`}</p>
                                <p className={`item-quantity ${style}`}>{i.quantity} left</p>
                            </div>
                        </div>
                    )})}
            </div>
        );

    }

}

export default Listing;