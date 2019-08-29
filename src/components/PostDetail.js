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
        console.log(this.state.post)
        return(
            <div className="container">
                <h2>Post Details {this.state.id}</h2>
            </div>
        )
    }
}
export default PostDetail;