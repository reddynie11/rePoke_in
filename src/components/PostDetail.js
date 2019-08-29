import React from 'react';
import axios from'axios';

class PostDetail extends React.Component{
    state={
        post:''
    }
    componentDidMount(){
        let ID = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ ID)
             .then((responce)=>{
                 this.setState({
                     post : responce.data
                 })
             })
    }
    
    render(){
        const post = this.state.post;
        let postItem = post ? (
            <div className="container">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <p className="center " >No post found</p>
        )
        return(
            <div>
                {postItem}
            </div>
        )
    }
}
export default PostDetail;