import React from 'react';
//import axios from'axios';
import {connect } from 'react-redux';

class PostDetail extends React.Component{    
    render(){
        const post = this.props.post;
        const postItem = post ? (
            <div className="post container">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div className="center " >loading post ...</div>
        )
        return(
            <div>
                {postItem}
            </div>
        )
    }
}
const mapStateToProps =(state, thisProps)=>{
    let ID = thisProps.match.params.post_id;
    return{
        post : state.posts.find((post)=>{
            return post.id === ID
        })
    }
}
export default connect(mapStateToProps)(PostDetail);