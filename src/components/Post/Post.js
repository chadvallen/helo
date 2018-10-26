import React, { Component } from 'react'
import axios from 'axios';

export default class Post extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      title: '',
      content: '',
      img: ''
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    axios.get(`/api/posts`).then(res => {
      this.setState({posts: res.data})
      console.log(res.data)
    })
  }

  updatePostContent = (id, content) => {
    axios.put(`/api/post?id=${id}`, {content}).then(() => {
      console.log('post updated!')
      console.log(this.state.posts)
    }).catch(error => {
      console.error('Error on updatePostContent', error)
    })
    this.getPosts();
  }

  handleInputs = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    
    let allPosts = this.state.posts.map(item => {
      return (
        <div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <input name="content" onChange={event => this.handleInputs(event)}></input>
          <button onClick={() => this.updatePostContent(item.id, this.state.content)}>Update content</button>
        </div>
      )
    })

    return (
      <div>
        {allPosts}
      </div>
    )
  }
}
