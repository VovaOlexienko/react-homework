import React, {Component} from "react";
import CardProduct from "./CardProduct";

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleProductsNumber: 0
        }
    }

    incrementVisibleProductsNumber = () => {
        this.setState(prevState => ({
            visibleProductsNumber: prevState.visibleProductsNumber + 1
        }));
    }

    decrementVisibleProductsNumber = () => {
        this.setState(prevState => ({
            visibleProductsNumber: prevState.visibleProductsNumber - 1
        }));
    }

    findCategoryById = () => {
        return this.props.categories.filter(category => category.id === this.props.categoryId)[0];
    }

    render() {
        return (
            <div className="album">
                <div className="container">
                    <div className="d-flex">
                        <h4>Знайдено продуктів: {this.state.visibleProductsNumber}</h4>
                        {this.props.categoryId &&
                            <h4 className="ms-5">Вибрана категорія: {this.findCategoryById().name}</h4>}
                    </div>
                    <hr/>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.props.products
                            .filter(product => this.props.categoryId === null || product.categoryId === this.props.categoryId)
                            .map(product => <CardProduct key={product.id} product={product}
                                                         addToBasket={this.props.addToBasket}
                                                         incrementVisibleProductsNumber={this.incrementVisibleProductsNumber}
                                                         decrementVisibleProductsNumber={this.decrementVisibleProductsNumber}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;