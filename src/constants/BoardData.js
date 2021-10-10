export const PRIORITY_HIGHEST = 'HIGHEST';
export const PRIORITY_HIGH 	 = 'HIGH';
export const PRIORITY_MEDIUM  = 'MEDIUM';
export const PRIORITY_LOW		 = 'LOW';
export const PRIORITY_TRIVIAL = 'TRIVIAL';
// STATUS
export const TYPE_TODO = 'TODO';
export const TYPE_INPROGRESS	 = 'INPROGRESS';
export const TYPE_DONE  = 'DONE';
export const TYPE_INQA = 'INQA';
export const TYPE_DEV_COMPLETE = 'DEV_COMPLETE';


export const TITLE_TODO = 'To do';
export const TITLE_INPROGRESS = 'In Progress';
export const TITLE_DONE = 'Done';
export const TITLE_INQA = 'In QA';
export const TITLE_DEV_COMPLETE = 'Dev Complete';

export const types = ["Task","Bug","Story"];
export const category = [TYPE_TODO, TYPE_INPROGRESS, TYPE_DEV_COMPLETE, TYPE_INQA, TYPE_DONE];
export const categoryDisplay = {'TODO':TITLE_TODO, 'INPROGRESS':TITLE_INPROGRESS, 'DEV_COMPLETE':TITLE_DEV_COMPLETE, 'INQA': TITLE_INQA, 'DONE': TITLE_DONE};
export const epic = ["Admin", "Footer", "Header", "Feature", "User Profile", "Login"];
export const users = ["User1", "TestUser", "TestUser2", "TestUser3"];

export const BoardData = [
    {
        id:"Sprint Board",
        title: "Active Sprint",
		types: types,
		category: category,
		epic: epic,
		tasks: [{
			id: '1',
			priority: PRIORITY_HIGHEST,
			title: 'Complete Jiira Board',
			description: 'Complete Jiira Kinban Board desing',
			epic: 'Admin',
			assignedTo: 'User1',
			status: TYPE_DONE,
			type: "Story",
			points: 3
		},
		{
			id: '2',
			priority: PRIORITY_HIGHEST,
			title: 'Install dependencies',
			description: 'Create react app and install required dependencies',
			epic: 'Footer',
			status: TYPE_DONE,
			assignedTo: 'TestUser',
			type: "Story",
			points: 3
		},
		{
			id: '3',
			priority: PRIORITY_HIGH,
			title: 'Filter Failed',
			description: 'Filter not working as expected',
			assignedTo: 'TestUser2',
			epic: 'Feature',
			type: "Bug",
			status: TYPE_DONE
		},
		{
			id: '4',
			priority: PRIORITY_MEDIUM,
			title: 'Create some little components',
			epic: 'Login',
			assignedTo: 'TestUser3',
			description: 'Create components',
			type: "Task",
			status: TYPE_INPROGRESS
		},
		{
			id: '5',
			priority: PRIORITY_LOW,
			title: 'Do a little project with ReduxJS',
			description: '',
			epic: 'Feature',
			assignedTo: 'TestUser3',
			type: "Bug",
			status: TYPE_TODO
		}]
	}];
