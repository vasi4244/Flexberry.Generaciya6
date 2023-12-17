import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-generaciya-6-настройка-опр-l');
  this.route('i-i-s-generaciya-6-настройка-опр-e',
  { path: 'i-i-s-generaciya-6-настройка-опр-e/:id' });
  this.route('i-i-s-generaciya-6-настройка-опр-e.new',
  { path: 'i-i-s-generaciya-6-настройка-опр-e/new' });
  this.route('i-i-s-generaciya-6-опрос-l');
  this.route('i-i-s-generaciya-6-опрос-e',
  { path: 'i-i-s-generaciya-6-опрос-e/:id' });
  this.route('i-i-s-generaciya-6-опрос-e.new',
  { path: 'i-i-s-generaciya-6-опрос-e/new' });
  this.route('i-i-s-generaciya-6-сотрудники-l');
  this.route('i-i-s-generaciya-6-сотрудники-e',
  { path: 'i-i-s-generaciya-6-сотрудники-e/:id' });
  this.route('i-i-s-generaciya-6-сотрудники-e.new',
  { path: 'i-i-s-generaciya-6-сотрудники-e/new' });
  this.route('i-i-s-generaciya-6-список-l');
  this.route('i-i-s-generaciya-6-список-e',
  { path: 'i-i-s-generaciya-6-список-e/:id' });
  this.route('i-i-s-generaciya-6-список-e.new',
  { path: 'i-i-s-generaciya-6-список-e/new' });
});

export default Router;
