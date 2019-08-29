import React from 'react'
import axios from 'axios'

class Posts extends React.Component{
    state={
        posts: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then((responce)=>{
                 this.setState({
                    posts:responce.data.slice(0,10)
                 })
             })
    }
    render(){
        const {posts} =  this.state;
        const postList = posts.length ? (
            posts.map((post)=>{
                return (
                    <div className="post card" key={post.id} >
                        <div className="card-content" >
                            <div className="card-title" >{post.title}</div>
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
export default Posts;