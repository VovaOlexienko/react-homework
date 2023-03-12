import {Component} from "react";

class CommentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-6">
                {this.props.comments.map(comment =>
                    <>
                        <p className="bg-secondary rounded p-2 m-2">
                            {comment.user.name} ({comment.user.email})
                            <br/>
                            {comment.content}
                        </p>
                    </>)}
            </div>
        );
    }
}

export default CommentList;