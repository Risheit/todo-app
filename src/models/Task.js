export default class Task {
    #text;
    #isComplete;

    constructor(text) {
        this.#text = text;
        this.#isComplete = false;
    }
};
