import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class PostContent extends React.Component {
	constructor(props) {
		super(props);
	}

  render () {
		const {post} = this.props;
    return pug`
			.post-content
				if post.linkImg
					img.img-responsive.post-image(src=post.linkImg, alt="post-image")
				if post.linkVideo
					video.post-video(controls)
						source(src=post.linkVideo, type="video/mp4")
				if post.googleMap
					div.google-maps
						div.map#map
				.post-container
					img.profile-photo-md.pull-left(src="http://placehold.it/300x300", alt="user")
					.post-detail
						.user-info
							h5
								Router
									Link.profile-link(to="/") #{post.user}
								span.following following
							p.text-muted #{post.time}
						.reaction
							Router
								Link.btn.text-green(to='/') 
									i.icon.ion-thumbsup 
										span #{post.like}
							Router
								Link.btn.text-red(to='/') 
									i.fa.fa-thumbs-down 
										span #{post.dislike}
						.line-divider
						.post-text
							p #{post.postDetail}
						.line-divider
						each comment in post.comments
							.post-comment(key=comment.id)
								img.profile-photo-sm(src="http://placehold.it/300x300", alt="")
								div
									Router
										Link.profile-link(to="/") #{comment.user}
									p #{comment.commentDetail}
						.post-comment
							img.profile-photo-sm(src="http://placehold.it/300x300", alt="")
							input.form-control(type="text", placeholder="Post a comment")
		`;
  }
}

export default PostContent;
