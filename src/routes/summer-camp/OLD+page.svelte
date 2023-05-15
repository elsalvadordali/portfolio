<script lang="ts">
	/*
	import {
		getAuth
	} from 'firebase/auth';
	import { firebaseApp } from '$lib/firebase';
	import { authUser, checkDate, yogaLinks } from '$lib/camp';

	let loading = true;
	const auth = getAuth(firebaseApp);
	const user = {
		email: auth.currentUser ? auth.currentUser.email : '',
		password: '',
		isLoggedIn: auth.currentUser ? true : false,
		cred: auth.currentUser
	};
	let taskInProgress = 0;
	let minutes = '25';
	let seconds = '00';
	let taskArray = [
		{
			id: 1,
			name: 'eat breakfast',
			timeLeft: 2100,
			icon: '/summer-camp/breakfast.png',
			doneIcon: '/summer-camp/breakfast2.png',
			subTasks: [
				{name: 'make breakfast', isDone: false},
				{name: 'eat breakfast', isDone: false},
				{name: 'clean up', isDone: false},
				{name: 'brush teeth', isDone: false},
			]
		},
		{
			id: 2,
			name: 'get ready',
			timeLeft: 420,
			// seven minutes
			icon: '/summer-camp/brushing-teeth.png',
			doneIcon: '/summer-camp/brushing-teeth2.png',
			subTasks: [
				{name: 'get dressed', isDone: false},
				{name: 'brush hair', isDone: false},
				{name: 'make bed', isDone: false},
				{name: 'put pjs usder pillows', isDone: false},
			]
		},
		{
			id: 3,
			name: 'workbook',
			timeLeft: 5,
			icon: '/summer-camp/open-book.png',
			doneIcon: '/summer-camp/open-book2.png'
		},
		{
			id: 4,
			name: 'yoga',
			timeLeft: 1500,
			icon: '/summer-camp/yoga.png',
			doneIcon: '/summer-camp/yoga2.png'
		},
		{
			id: 5,
			name: 'play',
			timeLeft: 1500,
			icon: '/summer-camp/playground.png',
			doneIcon: '/summer-camp/playground2.png'
		},
		{ id: 6, name: 'draw', timeLeft: 1500, icon: '/summer-camp/father.png' },
		{ id: 7, name: 'korean', timeLeft: 1500, icon: '/summer-camp/student.png' },
		{
			id: 8,
			name: 'eat lunch',
			timeLeft: 5,
			icon: '/summer-camp/cooking.png',
			doneIcon: '/summer-camp/cooking2.png'
		}
	];
	let tasks = taskArray.map(item => {
		//if (item.subTasks) return new Task(item.id, item.timeLeft, item.name, item.icon, item.doneIcon, item.subTasks)
		return 'hi'
		//turn new Task(item.id, item.timeLeft, item.name, item.icon, item.doneIcon)
	})

	auth.onAuthStateChanged(function (e) {
		if (e) {
			user.cred = e.auth.currentUser;
			user.isLoggedIn = true;
			user.name = user.cred?.email?.split("@")[0];
		}
		loading = false;
	});
	class Task {
		// optional
		id;
		constructor(id, duration, name, icon, doneIcon, subTasks = [] ) {
			this.id = id;
			this.name = name;
			this.duration = duration;
			this.icon = icon;
			this.doneIcon = doneIcon;
			this.subTasks = subTasks;
			this.timer = null;
		}
		startTimer() {
			this.timer = setInterval(this.toggleTimer, this.duration);
		}
		stopTimer() {
			clearInterval(this.timer);
		}
		toggleTimer() {
			if (this.timeLeft <= 0) {
				this.timeLeft = 1500;
				this.secondsPassed = 0;
			}
			if (this.timeLeft > 0) {
				this.timeLeft -= 1;
				this.secondsPassed += 1;
			}
		}

	}
	
	checkDate();
	
	function startTask(task) {
		if (taskInProgress === task.id) {
			taskInProgress = 0;
			clearInterval(timer);
			minutes = '00';
			seconds = '00';
			tasks = tasks;
		} else if (taskInProgress) return;
		else {
			taskInProgress = task.id;
			task.started = new Date();
			startTimer(task.id - 1);
		}
	}
	function startTimer(i) {
		//minutes = parseInt(task.timeLeft / 60) ? parseInt(task.timeLeft / 60) : '00';
		//seconds = task.timeLeft % 60 ? task.timeLeft % 60 : '00';
		timer = setInterval(() => {
			tasks[i].timeLeft -= 1;
			minutes = Math.floor(tasks[i].timeLeft / 60) ? Math.floor(tasks[i].timeLeft / 60) : '00';
			seconds =
				tasks[i].timeLeft % 60
					? tasks[i].timeLeft % 60 < 10
						? '0' + (tasks[i].timeLeft % 60).toString()
						: tasks[i].timeLeft % 60
					: '00';
			if (tasks[i].timeLeft <= 0) {
				const sound = new Audio('/summer-camp/sound.mp3');
				sound.play();
				//play sound effect??
				// show notification
				tasks[i].timeLeft = -1;
				clearInterval(timer);
			}
			if (seconds % 60 <= 0) {
				localStorage.setItem('tasks', JSON.stringify(tasks));
			}
		}, 1000);
	}

	class Timer {
		constructor(duration, updateDatabase) {
			this.duration = duration;
			this.timeLeft = duration;
			this.timer = null;
			this.updateDatabase = updateDatabase;
			this.minutes = '00';
			this.seconds = '00'
		}
		toggleTimer() {
			if (this.timer) {
				this.pauseTimer()
			} else this.startTimer()
		}
		startTimer() {
			this.timer = setInterval(this.helperFunction, this.timeLeft);
		}
		pauseTimer() {
			clearInterval(this.timer);
			this.timer = null
		}
		displayTime() {
			this.seconds = (this.timeleft % 60).toString()
			this.minutes = (Math.floor(this.timeleft / 60)).toString()
		}
		updateTimeLeft() {
			this.timeLeft -= 1;
			this.displayTime()
			if (this.timeLeft % 120 === 0) {
				//update db
				if (this.updateDatabase) this.updateDatabase()
			}
		}
	}


	class Break {
		constructor() {
			this.timer = null;
		}
		
	}

*/

</script>
