import {useParams} from "react-router-dom";
import Product from "./Product";
import React, {useState} from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function ProductPage(props) {
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    const product = props.products.filter(p => p.id === +id)[0];
    const category = props.categories.filter(c => c.id === product.categoryId)[0];
    const addComment = (comment) => setComments(prevComments => [...prevComments, comment]);
    return (
        <>
            <div className="container">
                <Product product={product} category={category}/>
                <hr/>
                <h6 className="text-center">Коментарі</h6>
                <hr/>
                <div className="d-flex row">
                    <CommentList comments={comments}/>
                    <CommentForm addComment={addComment}/>
                </div>
            </div>
        </>
    );
}

export default ProductPage;