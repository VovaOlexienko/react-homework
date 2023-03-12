import React, {Component} from "react";

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comment: ""
        };
    }

    addComment = (e) => {
        e.preventDefault();
        this.props.addComment({content: this.state.comment, user: {name: this.state.name, email: this.state.email}});
        this.setState({
            name: "",
            email: "",
            comment: ""
        });
        console.log(`Ваш відгук: "${this.state.comment}" додано успішно!`);
        alert(`Ваш відгук: "${this.state.comment}" додано успішно!`);
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handleCommentChange = (e) => {
        this.setState({comment: e.target.value});
    }

    render() {
        return (
            <form className="col-6" onSubmit={this.addComment}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                           placeholder="Your name" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email"
                           placeholder="Your email" value={this.state.email} onChange={this.handleEmailChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment</label>
                    <textarea className="form-control" id="comment" placeholder="Your comment" rows="5"
                              value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div className="form-group mt-2">
                    <input type="submit" className="btn btn-success" value="Send comment"/>
                </div>
            </form>)
    }
}

export default CommentForm;