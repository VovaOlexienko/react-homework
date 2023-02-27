import React, {Component} from "react";

class CardProduct extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.incrementVisibleProductsNumber();
    }

    componentWillUnmount() {
        this.props.decrementVisibleProductsNumber();
    }

    render() {
        const {addToBasket, product} = this.props;
        const {name, description, image} = product;
        return (
            <div className="col">
                <div className="card shadow-sm">
                    <img width="100%" height="225" src={image} className="App-logo" alt="logo"/>
                    <div className="card-body">
                        <h3 className="card-text">{name}</h3>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-success"
                                        onClick={() => addToBasket(product)}>
                                    Add to basket
                                </button>
                            </div>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProduct;