import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import React, {Component} from "react";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 1
                },
                {
                    id: 2,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 1
                },
                {
                    id: 3,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 2
                },
                {
                    id: 4,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 3
                },
                {
                    id: 5,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 3
                },
                {
                    id: 6,
                    name: "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C)",
                    description: "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний'",
                    image: "https://mobikoff.com.ua/pub/media/magefan_blog/best-laptops.jpg",
                    categoryId: 3
                }
            ],
            categories: [
                {
                    id: null,
                    name: "All"
                },
                {
                    id: 1,
                    name: "Laptop",
                },
                {
                    id: 2,
                    name: "Mobile",
                },
                {
                    id: 3,
                    name: "PC",
                }
            ],
            basket: [],
            categoryId: null
        }
    }

    addToBasket = (product) => {
        this.setState(prevState => ({
            basket: [...prevState.basket, product]
        }));
    }

    selectCategory = (categoryId) => {
        this.setState(() => ({
            categoryId: categoryId
        }));
    }

    render() {
        return (
            <div className="bg-light">
                <Header basket={this.state.basket} categories={this.state.categories}
                        selectCategory={this.selectCategory}/>
                <Body categoryId={this.state.categoryId} products={this.state.products}
                      categories={this.state.categories} addToBasket={this.addToBasket}/>
                <Footer/>
            </div>
        );
    }
}

export default App;