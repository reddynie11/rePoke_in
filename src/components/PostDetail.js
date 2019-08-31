import React from 'react';
//import axios from'axios';
import {connect } from 'react-redux';

class PostDetail extends React.Component{    
    handleDelete = ()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/articles')
    }
    render(){
        console.log(this.props)
        const post = this.props.post;
        const postItem = post ? (
            <div className="post container">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleDelete} >Delete Post</button>
                </div>
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
const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost : (id)=>{ dispatch({type : 'DELETE_POST', payload : id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetail);