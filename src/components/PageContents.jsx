import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SideBarLeft from './PageContents/SideBarLeft.jsx';
import SideBarRight from './PageContents/SideBarRight.jsx';
import PostCreateBox from './PageContents/PostCreateBox.jsx';
import PostContent from './PageContents/PostContent.jsx';
import '../../public/styles/PageContents.scss';


class PageContents extends Component {
  constructor (props) {
    super (props);
    this.state = {
			posts: []
    }
    this.getAllPost = this.getAllPost.bind(this)
    this.sortPostByDate = this.sortPostByDate.bind(this)
  }

  componentDidMount() {
    this.getAllPost(this)
  }

  componentWillUpdate() {
    this.getAllPost(this)
  }

  async getAllPost(e) {
    await axios.get("/post/get-all").then(async (response) => {
      await e.setState({
        posts: response.data
      })
    }).catch(err => {
      console.log("err", err)
    })
  }

  sortPostByDate(array) {
    let sortedArray = array.sort(function (a, b) {
      return new Date(b.time) - new Date(a.time);
    })
    return sortedArray
  }

  render () {
    return pug`
    #page-contents
      .container
        .row
          SideBarLeft
          .col-md-7
            PostCreateBox
            each post in this.sortPostByDate(this.state.posts)
              PostContent(key=post._id, post=post)
          SideBarRight
    `;
  }
}

export default withRouter(PageContents);
