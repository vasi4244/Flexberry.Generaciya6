import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.generaciya-6.caption'),
          title: i18n.t('forms.application.sitemap.generaciya-6.title'),
          children: [{
            link: 'i-i-s-generaciya-6-опрос-l',
            caption: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-опрос-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-опрос-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-generaciya-6-настройка-опр-l',
            caption: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-настройка-опр-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-настройка-опр-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-generaciya-6-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-сотрудники-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-generaciya-6-список-l',
            caption: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-список-l.caption'),
            title: i18n.t('forms.application.sitemap.generaciya-6.i-i-s-generaciya-6-список-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})