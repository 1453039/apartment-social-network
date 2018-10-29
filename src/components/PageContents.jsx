import React, {Component} from 'react';
import SideBarLeft from './PageContents/SideBarLeft.jsx';
import SideBarRight from './../store/index.js';
import PostCreateBox from './PageContents/PostCreateBox.jsx';
import PostContent from './PageContents/PostContent.jsx';
import '../styles/PageContents.scss';
import Video from '../videos/1.mp4';

class PageContents extends Component {
  constructor () {
    super ();
    this.state = {
      post1: {
        user: 'Alexis Clark',
        time: 'Published a photo about 3 mins ago',
        linkImg: 'http://placehold.it/1920x1280',
        linkVideo: '',
        postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        like: '13',
        dislike: '0',
        comments: [
          {
            id: 0,
            user: 'Diana',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          },
          {
            id: 1,
            user: 'John',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          },
        ],
      },
      post2: {
        user: 'Sophia Lee',
        time: 'Updated her status about 33 mins ago',
        linkImg: '',
        linkVideo: Video,
        postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        like: '75',
        dislike: '8',
        comments: [
          {
            id: 0,
            user: 'Olivia',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
          },
          {
            id: 1,
            user: 'Sarah',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
					},
					{
            id: 2,
            user: 'Linda',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					}
        ],
			},
			post3: {
        user: 'Linda Lohan',
        time: 'Published a photo about 1 hour ago',
        linkImg: '',
        linkVideo: '',
        postDetail: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        like: '23',
        dislike: '4',
        comments: [
          {
            id: 0,
            user: 'Cris',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          }
        ],
			},
			post4: {
        user: 'Sophia Lee',
        time: 'Updated her status about 33 mins ago',
        linkImg: '',
        linkVideo: Video,
        postDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        like: '75',
        dislike: '8',
        comments: [
          {
            id: 0,
            user: 'Olivia',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
          },
          {
            id: 1,
            user: 'Sarah',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
					},
					{
            id: 2,
            user: 'Linda',
            commentDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
					}
        ],
			}
    };
  }

  render () {
    return pug`
    #page-contents
      .container
        .row
          SideBarLeft
          .col-md-7
            PostCreateBox
            PostContent(post=this.state.post1)
            PostContent(post=this.state.post2)
            PostContent(post=this.state.post3)
          // SideBarRight
    `;
  }
}

export default PageContents;
