import {App} from '@/components/app/App';
import './scss/index.scss';
import {state} from '@/core/state';

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
      state.dataTest = data;
      const quiz = new App('#app');
      quiz.render();
    })
    .catch(error => console.log('error', error));


