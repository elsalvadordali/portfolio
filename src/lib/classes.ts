import {
    doc,
    getDoc,
    updateDoc,
    setDoc,
    getFirestore,
  } from 'firebase/firestore'
  const db = getFirestore()

export class Timer {
    duration: number;
    timeLeft: number;
    isDone: boolean;
    timer: any;
    updateDatabase: any;
    minutes: string;
    seconds: string;
    constructor(duration: number, updateDatabase: any) {
        this.duration = duration;
        this.timeLeft = duration;
        this.isDone = false;
        this.updateDatabase = updateDatabase;
        this.minutes = '00';
        this.seconds = '00';
    }
    toggleTimer() {
        if (this.timer) {
            this.pauseTimer();
        } else this.startTimer();
    }
    startTimer() {
        this.timer = setInterval(this.updateTimeLeft, this.timeLeft);
    }
    pauseTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }
    displayTime() {
        this.seconds = (this.timeLeft % 60).toString();
        this.minutes = Math.floor(this.timeLeft / 60).toString();
    }
    updateTimeLeft() {
        this.timeLeft -= 1;
        this.displayTime();
        if (this.timeLeft % 120 === 0) {
            //update db
            if (this.updateDatabase) this.updateDatabase();
        }
    }
}

export class Task {
    id: number;
    name: string;
    timeLeft: number;
    icon: string;
    doneIcon: string;
    subTasks: { name: string; isDone: boolean }[];
    isDone: boolean;
    canBeDone: boolean = false;
    constructor(
        id: number,
        name: string,
        timeLeft: number,
        icon: string,
        doneIcon: string,
        subTasks: { name: string; isDone: boolean }[]
    ) {
        this.id = id;
        this.name = name;
        this.timeLeft = timeLeft;
        this.icon = icon;
        this.doneIcon = doneIcon;
        this.subTasks = subTasks;
        this.isDone = false;
        // this.timer = new Timer(timeLeft, this.updateDatabase);
        this.canBeDone = subTasks.length == 0 ? true : false;
    }

    async updateDatabase(task: string, userId: string) {
        //update db
        //firebase something something
        const reference = doc(db, 'table', userId)
        // fix this or perhaps use updateArray?? 
        let res = await updateDoc(reference, {task})
          
    }
}