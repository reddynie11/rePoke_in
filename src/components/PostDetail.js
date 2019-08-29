import React from 'react'

class PostDetail extends React.Component{
    state={
        id:''
    }
    componentDidMount(){
        let ID = this.props.match.params.post_id
        this.setState({
            id:ID
        })
    }
    
    render(){
        return(
            <div className="container">
                <h2>Post Details {this.state.id}</h2>
            </div>
        )
    }
}
export default PostDetail;