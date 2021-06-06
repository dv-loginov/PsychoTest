import './scss/index.scss';
import {status, json} from '@core/util';
import {App} from '@/components/app/App';
fetch('http://dv-loginov.ru/data/tests/AccentuationCharacter.json')
    .then(status)
    .then(json)
    .then(data => {
      const app = new App('#app', data);
      app.render();
    })
    .catch(error => console.log('error', error));
