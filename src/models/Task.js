export default class Task {
    #text;
    #isComplete;

    constructor(text, isComplete = false) {
        this.#text = text;
        this.#isComplete = isComplete;
    }

    text = () => this.#text;
    isComplete = () => this.#isComplete;
};

const toggleTaskStatus = (task) =>
    new Task(task.text(), !task.isComplete());

export { toggleTaskStatus };
