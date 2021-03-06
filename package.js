Package.describe({
  summary: "Meteor Reactive Fullcalendar - Full-sized drag & drop event calendar",
  version: "2.4.0_2",
  git: "https://github.com/koretech/meteor-reactive-fullcalendar.git",
  name: 'krt:meteor-reactive-fullcalendar'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('momentjs:moment@2.10.6', 'client');
  api.use('templating', 'client');
  api.addFiles([
      'fullcalendar.js',
      'fullcalendar.css',
      'lang-all.js',
      'gcal.js',
      'reactive-fullcalendar.js',
      'reactive-fullcalendar-template.html',
      'reactive-fullcalendar-template.js'
  ],'client');
});
