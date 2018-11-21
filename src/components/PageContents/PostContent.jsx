import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios'
import _ from 'lodash'

class PostContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postUser: [],
      currentUser: [],
      post: this.props.post,
      page: window.location.search
    }
    this.getUserFromSession = this.getUserFromSession.bind(this)
    this.getPostUser = this.getPostUser.bind(this)
    this.handlePostTime = this.handlePostTime.bind(this)
    this.onClickReaction = this.onClickReaction.bind(this)
  }

  componentDidMount() {
    this.getPostUser(this)
    this.getUserFromSession(this)
  }

  componentWillUpdate() {
    this.getPostUser(this)
  }

  async getPostUser(e) {
    await axios.get("/members/get-user", {
      params: {
        id: e.state.post.author
      }
    }).then(async (response) => {
      await e.setState({
        postUser: response.data
      })
    }).catch(err => {
      console.log("err", err)
    })
  }

  async getUserFromSession(e) {
    await axios.get("/members/get_user_from_session").then((response) => {
      e.setState({
        currentUser: response.data
      })
    }).catch(err => {
      console.log("err", err);
    })
  }

  async updateReaction(e) {
    await axios.put("/post/update-reaction", {
      id: e.state.post._id,
      like: e.state.post.like,
      dislike: e.state.post.dislike
    }).then((response) => {
      alert(response.data)
    }).catch(err => {
      console.log("err", err)
    })
  }

  handlePostTime(time) {
    let now = new Date()
    let postTime = new Date(time)
    var timeDiff = Math.abs(now.getTime() - postTime.getTime())
    if (timeDiff / (1000 * 3600 * 24) < 1)
      if (timeDiff / (1000 * 3600) < 1)
        if (timeDiff / (1000 * 60) < 1)
          return ('Just now')
        else return (Math.floor(timeDiff / (1000 * 60)) + ' minutes ago')
      else
        return (Math.floor(timeDiff / (1000 * 3600)) + ' hours ago')
    else {
      let day = postTime.getDate()
      let month = postTime.getMonth()
      let hour = postTime.getHours()
      let minute = postTime.getMinutes()
      if (Math.floor(timeDiff) / (1000 * 3600 * 24) == 1)
        return ('Yesterday at ' + hour + ':' + minute)
      else
        return (day + '/' + month + ' at ' + hour + ':' + minute)
    }
  }

  async onClickReaction(e) {
    let currentUserId = this.state.currentUser._id
    let indexOfLike = _.findIndex(this.state.post.like, function(id) {
      return id === currentUserId
    })
    let indexOfDislike = _.findIndex(this.state.post.dislike, function(id) {
      return id === currentUserId
    })
    console.log("e.target.id", e.target.id)
    if (e.target.id == 'like')
      if (indexOfLike >= 0) {
        _.pull(this.state.post.like, currentUserId)
      } else if (indexOfDislike >= 0) {
        _.pull(this.state.post.dislike, currentUserId)
        this.state.post.like.push(currentUserId)
      }
      else {
        this.state.post.like.push(currentUserId)
      }
    else if (e.target.id == 'dislike')
      if (indexOfDislike >= 0) {
        _.pull(this.state.post.dislike, currentUserId)
      } else if (indexOfLike >= 0) {
        _.pull(this.state.post.like, currentUserId)
        this.state.post.dislike.push(currentUserId)
      }
      else {
        this.state.post.dislike.push(currentUserId)
      }
    await this.updateReaction(this)
  }

  render() {
    return pug`
      .post-content
        if (this.state.page == '?timeline')
          .post-date.hidden-xs.hidden-sm
            h5 #{this.state.postUser.name}
            p.text-grey #{this.state.post.time}
        if this.state.post.linkImg
          img.img-responsive.post-image(src=this.state.post.linkImg, alt="post-image")
        if this.state.post.linkVideo
          video.post-video(controls)
            source(src=this.state.post.linkVideo, type="video/mp4")
        .post-container
          img.profile-photo-md.pull-left(src=this.state.postUser.avatar, alt="user")
          .post-detail
            .user-info
              h5
                Link.profile-link(to="/") #{this.state.postUser.name}
                if(this.state.post.isAdmin)
                  i.icon.ion-android-checkmark-circle
                p.text-muted #{this.handlePostTime(this.state.post.time)}
            .reaction
              .btn.text-green#like(onClick=this.onClickReaction) 
                i.fa.fa-thumbs-up#like 
                span#like #{this.state.post.like.length}
              div.btn.text-red#dislike(onClick=this.onClickReaction) 
                i.fa.fa-thumbs-down#dislike 
                span#dislike #{this.state.post.dislike.length}
            .line-divider
            .post-text
              p #{this.state.post.description}
            .line-divider
            each comment in this.state.post.comments
              .post-comment(key=comment.id)
                img.profile-photo-sm(src="http://placehold.it/300x300", alt="")
                Link.profile-link(to="/") #{comment.user}
                span.text-mute #{comment.time}
                p #{comment.commentDetail}
            .post-comment
              input.form-control(type="text", placeholder="Post a comment")
    `;
  }
}

export default withRouter(PostContent);
