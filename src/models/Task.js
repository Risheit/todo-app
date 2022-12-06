export default class Task {
    #text;
    #isComplete;

    constructor(text) {
        this.#text = text;
        this.#isComplete = false;
    }

    text = () => this.#text;
    isComplete = () => this.#isComplete;
};

const setTaskStatus = (task, isComplete) => new Task(task.text, isComplete);

export { setTaskStatus };
