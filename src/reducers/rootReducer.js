const initState ={
    posts : [
        {id:'1', title:'Best Beaches in Thailand', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eveniet aliquam fugiat distinctio quaerat numquam vitae totam at, quibusdam facere, fuga repudiandae libero reiciendis nobis quo laudantium ab illum molestias.'},
        {id:'2', title:'Best Food to try in Thailand', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eveniet aliquam fugiat distinctio quaerat numquam vitae totam at, quibusdam facere, fuga repudiandae libero reiciendis nobis quo laudantium ab illum molestias.'},
        {id:'3', title:'Best Party places in Thailand', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur eveniet aliquam fugiat distinctio quaerat numquam vitae totam at, quibusdam facere, fuga repudiandae libero reiciendis nobis quo laudantium ab illum molestias.'}
    ]
}

const rootReducer = (state=initState, action)=>{
    console.log(action)
    if(action.type === 'DELETE_POST'){
        let newPost = state.posts.filter((post)=>{
            return post.id !== action.payload
        })
        return{
            ...state,
            posts : newPost
        }
    }
    return state 
}
export default rootReducer;