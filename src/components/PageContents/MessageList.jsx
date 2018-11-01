import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../../styles/PageContents.scss';
import '../../styles/Message.scss';

class MessageList extends Component {
	constructor() {
		super();
		this.state = {
			message: [
				{
					id: 0,
					name: 'Võ Trân Châu',
          linkImg: 'http://placehold.it/300x300',
          contents: [
            {
              id: 0,
              detail: 'hello',
              time: 'a minutes ago',
              status: 'seen',
              isFriend: true
            },
            {
              id: 1,
              detail: 'hello',
              time: 'a minutes ago',
              status: 'seen',
              isFriend: false
            },
            {
              id: 2,
              detail: 'hello',
              time: 'a minutes ago',
              status: 'seen',
              isFriend: true
            },{
              id: 3,
              detail: 'hello',
              time: 'a minutes ago',
              status: 'seen',
              isFriend: false
            }
          ]
				},
				{
					id: 1,
					name: 'Nguyễn Thị Kim Ngân',
          linkImg: 'http://placehold.it/300x300',
          contents: [
            {
              id: 0,
              detail: 'see you soon',
              time: 'a hour ago',
              status: 'replied'
            }
          ] 
				},
				{
					id: 2,
					name: 'Nguyễn Phạm Song Huy',
          linkImg: 'http://placehold.it/300x300',
          contents: [
            {
              id: 0,
              detail: 'okay',
              time: 'a hour ago',
              status: 'chat-alert'
            }
          ] 
        }
			]
		}
	}

  render() {
    const {message} = this.state;
    const mess1 = [];
    const mess2 = [];
    return pug`
    .chat-room
      .row
        .col-md-5
          ul.nav.nav-tabs.contact-list.scrollbar-wrapper.scrollbar-outer
            each item in message
              li(key=item.id)
                Router
                  Link(to='/')(data-toggle='tab')
                    .contact
                      img(src=item.linkImg, alt='').profile-photo-sm.pull-left
                      .msg-preview
                        h6 #{item.name}
                        p.text-muted #{item.contents[item.contents.length - 1].detail}
                        small.text-muted #{item.contents[item.contents.length - 1].time}
                        if(item.contents[item.contents.length - 1].status=='seen')
                          .seen
                            i.icon.ion-checkmark-round
                        else if(item.contents[item.contents.length - 1].status=='chat-alert')
                          .chat-alert 1
                        else
                          .replied
                            i.icon.ion-reply
        .col-md-7
          .tab-content.scrollbar-wrapper.wrapper.scrollbar-outer
            #contact-1.tab-pane.active
              .chat-body
                ul.chat-message
                  each content in (message[0].contents) ? mess1.push(content) : mess2.push(content)
                  each content in mess1  
                    li.left(key=content.id)
                      img(src=message[0].linkImg, alt='').profile-photo-sm.pull-left
                      .chat-item
                        .chat-item-header
                          small.text-muted #{content.time}
                        p #{content.detail}
                  each content in mess2 
                    li.right(key=content.id)
                    //img(src=message[0].linkImg, alt='').profile-photo-sm.pull-left
                    .chat-item
                      .chat-item-header
                        small.text-muted #{content.time}
                      p #{content.detail}


    `;
  }
}

export default MessageList;
