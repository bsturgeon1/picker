Package.describe({
  name: 'bsturgeon1:picker',
  summary: 'Server Side Router for Meteor',
  version: '1.1.8',
  git: 'https://github.com/bsturgeon1/picker',
  documentation: 'README.md'
});

Npm.depends({
  'path-to-regexp': '6.2.0'
});

function configurePackage(api) {
  api.versionsFrom('2.3');
  api.use(['webapp@2.0.3', 'ecmascript', 'url'], 'server');
}

Package.onUse(function(api) {
  configurePackage(api);
  api.mainModule('lib/instance.js', 'server');
});
