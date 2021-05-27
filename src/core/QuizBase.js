export class QuizBase {
  constructor(data) {
    this._current = {
      id: null,
      question: null,
      answers: [],
    };

    this._questionsAnswers = [];
    this._resultingResponses = [];
    this._amount = null;

    this._name = '';
    this._description = '';
    this._instruction = '';

    this._keys = [];
    this._limit = null;
    this._legend = [];
    this._rezults = [];

    this.parseData(data);
    this.current(1);
    this.isEnd = false;
  }

  parseData(data) {
    this._questionsAnswers = data.questionsAnswers;
    this._amount = this._questionsAnswers.length;
    this._keys = data.keys;
    this._limit = data.limit;
    this._name = data.name;
    this._description = data.description;
    this._instruction = data.instruction;
    this._legend = data.legend;
  }

  next() {
    const id = this._current.id;
    (this._current.id < this._amount)
      ? this.current(id + 1)
      : this.isEnd = true;
  }

  set setResponse(response) {
    this._resultingResponses[this._current.id - 1] = response;
  }

  prev() {
  }

  counting() {
    // this.setDemoResult(0);

    this._keys.map(key => {
      let sumNegative = 0;
      let sumPositive = 0;
      key.positive.map(numberQuestion => {
        if (this._resultingResponses[numberQuestion - 1] === 1) sumPositive++;
      });
      key.negative.map(numberQuestion => {
        if (this._resultingResponses[numberQuestion - 1] === 0) sumNegative++;
      });
      this._rezults.push((sumPositive + sumNegative) * key.multiplier);
    });
  }

  current(id) {
    if (Number.isInteger(id)) {
      this._current = {
        id: id,
        question: this._questionsAnswers[id - 1].question,
        answers: this._questionsAnswers[id - 1].answers || ['Нет', 'Да'],
      };
    } else {
      return this._current;
    }
  }

  get getRezults() {
    return this._rezults;
  }

  get getAmount() {
    return this._amount;
  }

  get getName() {
    return this._name;
  }

  get getDescription() {
    return this._description;
  }

  get getInstruction() {
    return this._instruction;
  }

  get getLimit() {
    return this._limit;
  }

  get getLegend() {
    return this._legend;
  }

  // for testing
  setDemoResult(aggregate = 0) {
    this._resultingResponses = new Array(this._amount);
    this._resultingResponses.fill(aggregate, 0, this._amount);
  }
}
