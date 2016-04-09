// import '../imports/api/tasks.js';
import { Tasks } from '../imports/api/tasks.js';

Meteor.startup(() =>{
  console.log("server main startup");
  // Tasks.remove({text: "BCB"});
  // Tasks.insert({ text: "BCB"});
})
