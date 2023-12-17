import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGeneraciya_6НастройкаОпрLForm from './forms/i-i-s-generaciya-6-настройка-опр-l';
import IISGeneraciya_6ОпросLForm from './forms/i-i-s-generaciya-6-опрос-l';
import IISGeneraciya_6СотрудникиLForm from './forms/i-i-s-generaciya-6-сотрудники-l';
import IISGeneraciya_6СписокLForm from './forms/i-i-s-generaciya-6-список-l';
import IISGeneraciya_6НастройкаОпрEForm from './forms/i-i-s-generaciya-6-настройка-опр-e';
import IISGeneraciya_6ОпросEForm from './forms/i-i-s-generaciya-6-опрос-e';
import IISGeneraciya_6СотрудникиEForm from './forms/i-i-s-generaciya-6-сотрудники-e';
import IISGeneraciya_6СписокEForm from './forms/i-i-s-generaciya-6-список-e';
import IISGeneraciya_6АнкетированиеModel from './models/i-i-s-generaciya-6-анкетирование';
import IISGeneraciya_6НастройкаОпрModel from './models/i-i-s-generaciya-6-настройка-опр';
import IISGeneraciya_6ОпросModel from './models/i-i-s-generaciya-6-опрос';
import IISGeneraciya_6содержаниеModel from './models/i-i-s-generaciya-6-содержание';
import IISGeneraciya_6СотрудникиModel from './models/i-i-s-generaciya-6-сотрудники';
import IISGeneraciya_6СписокModel from './models/i-i-s-generaciya-6-список';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-generaciya-6-анкетирование': IISGeneraciya_6АнкетированиеModel,
    'i-i-s-generaciya-6-настройка-опр': IISGeneraciya_6НастройкаОпрModel,
    'i-i-s-generaciya-6-опрос': IISGeneraciya_6ОпросModel,
    'i-i-s-generaciya-6-содержание': IISGeneraciya_6содержаниеModel,
    'i-i-s-generaciya-6-сотрудники': IISGeneraciya_6СотрудникиModel,
    'i-i-s-generaciya-6-список': IISGeneraciya_6СписокModel
  },

  'application-name': 'Generaciya_6',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Generaciya_6',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Generaciya_6',
          title: 'Generaciya_6'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'generaciya-6': {
          caption: 'Generaciya_6',
          title: 'Generaciya_6',
          'i-i-s-generaciya-6-опрос-l': {
            caption: 'Опрос',
            title: ''
          },
          'i-i-s-generaciya-6-настройка-опр-l': {
            caption: 'Настройка опр',
            title: ''
          },
          'i-i-s-generaciya-6-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-generaciya-6-список-l': {
            caption: 'Список',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-generaciya-6-настройка-опр-l': IISGeneraciya_6НастройкаОпрLForm,
    'i-i-s-generaciya-6-опрос-l': IISGeneraciya_6ОпросLForm,
    'i-i-s-generaciya-6-сотрудники-l': IISGeneraciya_6СотрудникиLForm,
    'i-i-s-generaciya-6-список-l': IISGeneraciya_6СписокLForm,
    'i-i-s-generaciya-6-настройка-опр-e': IISGeneraciya_6НастройкаОпрEForm,
    'i-i-s-generaciya-6-опрос-e': IISGeneraciya_6ОпросEForm,
    'i-i-s-generaciya-6-сотрудники-e': IISGeneraciya_6СотрудникиEForm,
    'i-i-s-generaciya-6-список-e': IISGeneraciya_6СписокEForm
  },

});

export default translations;
