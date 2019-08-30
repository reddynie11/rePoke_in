import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Posts extends React.Component{
 
    render(){
        const {posts} =  this.props;
        const postList = posts.length ? (
            posts.map((post)=>{
                return (
                    <div className="post card" key={post.id} >
                        <div className="card-content" >
                            <Link to={'/'+post.id}>
                                <div className="card-title" >{post.title}</div>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center" >No Posts</div>
        )
        return(
            <div className="container" >
                <h2 className="center" > Articles</h2>
                {postList}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps)(Posts);