import {Component} from "react";
import CurrencyConverter from "./CurrencyConverter";

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {product, category} = this.props;
        return (
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col">
                            <img className="w-100 open" src={product.image}/>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="row">
                        <div className="col-12" align="center">
                            <hr className="divider"/>
                            <h6>{product.name}</h6>
                            <hr className="divider"/>
                        </div>
                        <div className="col-2">
                            Категорія:
                        </div>
                        <div className="col-10">
                            <p>{category.name}</p>
                        </div>
                        <div className="col-2">
                            Опис:
                        </div>
                        <div className="col-10">
                            <p>{product.description}</p>
                        </div>
                    </div>
                    <CurrencyConverter/>
                </div>
            </div>
        )
    }
}

export default Product;