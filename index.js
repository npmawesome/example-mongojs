var mongojs = require('mongojs');
var db = mongojs('test', ['people']);

db.people.insert({name: 'Alex'}, function(err, person) {
  console.log(person);

  db.people.find({name: /al/i}, function(err, people) {
    console.log(people);

    db.people.drop(function() {
      db.close();
    });
  });
});
