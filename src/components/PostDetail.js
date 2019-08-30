import React from 'react';
import axios from'axios';

class PostDetail extends React.Component{
    state={
        post: null
    }
    componentDidMount(){
        let ID = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ID)
             .then((responce)=>{
                 this.setState({
                     post : responce.data
                 })
             })
    }
    
    render(){
        const post = this.state.post;
        let postItem = post ? (
            <div className="post container">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div className="center " >No post found</div>
        )
        return(
            <div>
                {postItem}
            </div>
        )
    }
}
export default PostDetail;