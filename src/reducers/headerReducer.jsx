const INITIAL_STATE = {
  home: [
		{
			id: 0,
			title: 'landing page 1',
		},
		{
			id: 1,
			title: 'landing page 2',
		},
	],
	newfeeds: [
		{
			id: 0,
			title: 'Newfeeds',
		},
		{
			id: 1,
			title: 'People Nearly',
		},
		{
			id: 2,
			title: 'My friends',
		},
		{
			id: 3,
			title: 'Chatroom',
		},
		{
			id: 4,
			title: 'Images',
		},
		{
			id: 5,
			title: 'Videos',
		},
	],
	timeline: [
		{
			id: 0,
			title: 'Timeline',
		},
		{
			id: 1,
			title: 'Timeline About',
		},
		{
			id: 2,
			title: 'Timeline Album',
		},
		{
			id: 3,
			title: 'Timeline Friends',
		},
		{
			id: 4,
			title: 'Edit: Basic Info',
		},
		{
			id: 5,
			title: 'Edit: Work',
		},
		{
			id: 6,
			title: 'Edit: Interests',
		},
		{
			id: 7,
			title: 'Account Settings',
		},
		{
			id: 8,
			title: 'Change Password',
		},
	],
	allpage: [
		{
			id: 0,
			title: 'landing page 1',
		},
		{
			id: 1,
			title: 'landing page 2',
		},
		{
			id: 2,
			title: 'Newfeeds',
		},
		{
			id: 3,
			title: 'People Nearly',
		},
		{
			id: 4,
			title: 'My Friends',
		},
		{
			id: 5,
			title: 'Chatroom',
		},
	]
};

function headerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default headerReducer;