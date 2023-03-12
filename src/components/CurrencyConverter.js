import {Component} from "react";

class CurrencyConverter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uah: "",
            dollar: ""
        };
    }

    handleUahChange = (e) => {
        this.setState({
            uah: e.target.value,
            dollar: (e.target.value / 40).toFixed(2)
        });
    }

    handleDollarChange = (e) => {
        this.setState({
            uah: (e.target.value * 40).toFixed(2),
            dollar: e.target.value
        });
    }

    render() {
        return (
            <>
                <div className="mt-4">
                    <div className="input-group">
                        <input type="number" className="form-control" name="uah" value={this.state.uah}
                               onChange={this.handleUahChange}/>
                        <span className="form-control">UAH</span>
                        <input type="number" className="form-control" name="dollar" value={this.state.dollar}
                               onChange={this.handleDollarChange}/>
                        <span className="form-control">$</span>
                    </div>
                </div>
            </>
        );
    }
}

export default CurrencyConverter;