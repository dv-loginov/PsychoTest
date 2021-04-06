import {Quiz} from '@/components/quiz/quiz';
import './scss/index.scss';

console.log('run');

const status = function(response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

const json = function(response) {
  return response.json();
};

fetch('http://dv-loginov.ru/data/tests/AccentuationCharacter.json')
    .then(status)
    .then(json)
    .then(data => {
      const quiz = new Quiz('#app', data);
      quiz.render();
    })
    .catch(error => console.log('error', error));


