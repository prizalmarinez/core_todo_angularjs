(function () {
  'use strict';

  angular
    .module('app.about_me')
    .controller('AboutMeController', AboutMeController);

  AboutMeController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AboutMeController($q, dataservice, logger) {
    var vm = this;

    vm.skills = [
      {
        img: 'https://images-platform.99static.com/Fgzet3IWiFUirQ6daKjLfE7Ievo=/fit-in/900x675/99designs-contests-attachments/14/14179/attachment_14179904',
        link: 'https://angularjs.org/'
      },
      {
        img: 'https://www.develodesign.co.uk/wp-content/uploads/2018/03/vuejs-logo.jpg',
        link: 'https://vuejs.org/'
      },
      {
        img: 'https://foundation.nodejs.org/wp-content/uploads/sites/50/2018/05/node.jpg',
        link: 'https://nodejs.org/en/'
      },
      {
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s---kKf1JnT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/eaq24yis2zpben743veo.png',
        link: 'https://vuex.vuejs.org/'
      },
      {
        img: 'https://blog.cyberpanel.net/wp-content/uploads/2019/03/express-js-cyberpanel.jpeg',
        link: 'https://expressjs.com/'
      },
      {
        img: 'https://magazine.odroid.com/wp-content/uploads/mongo-db-logo.png',
        link: 'https://www.mongodb.com/'
      }
      , {
        img: 'https://miro.medium.com/max/3600/1*WvDl2WlPs7cR8TTBvrjpyw.png',
        link: 'https://phoenixframework.org/'
      },
      {
        img: 'https://www.computing.co.uk/w-images/72c3828d-ca81-4ee0-96ec-a06fa90bfce1/0/postgresqllogo-580x358.png',
        link: 'https://www.postgresql.org/'
      },
      {
        img: 'https://miro.medium.com/max/760/1*OvMsmQs0Rzs_ScuiTsuWjw.png',
        link: 'https://git-scm.com/'
      },
      {
        img: 'https://seesparkbox.com/foundry/uploads/article_uploads/cat-_bitbucket.jpg',
        link: 'https://bitbucket.org'
      },
      {
        img: 'https://miro.medium.com/max/824/1*9RqBEDU9Mbg6XM8O6d7Q9A.png',
        link: 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
      }
    ];

    activate();

    function activate() {
      var promises = [];
      return $q.all(promises).then(function () {
      });
    }
  }
})();
