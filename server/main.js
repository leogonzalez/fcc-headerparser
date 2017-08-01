import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';


Meteor.startup(() => {

  WebApp.connectHandlers.use((req,res,next) => {

    const resStr = JSON.stringify({
      'ip address': req.headers['x-forwarded-for'],
      language: req.headers['accept-language'].split(`,`)[0],
      software: req.headers['user-agent'].match(/\((.+?)\)/)[0].replace(/[\(\)]/g,'')
    });
    res.end(resStr);
  });

});
