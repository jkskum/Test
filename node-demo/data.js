var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    var myobj = [
        { id: 1, name: 'John', address: 'Highway 71' },
        { id: 2, name: 'Peter', address: 'Lowstreet 4' },
        { id: 3, name: 'Amy', address: 'Apple st 652' },
        { id: 4, name: 'Hannah', address: 'Mountain 21' },
        { id: 5, name: 'Michael', address: 'Valley 345' },
        { id: 6, name: 'Sandy', address: 'Ocean blvd 2' },
        { id: 7, name: 'Betty', address: 'Green Grass 1' },
        { id: 8, name: 'Richard', address: 'Sky st 331' },
        { id: 9, name: 'Susan', address: 'One way 98' },
        { id: 10, name: 'Vicky', address: 'Yellow Garden 2' },
        { id: 11, name: 'Ben', address: 'Park Lane 38' },
        { id: 12, name: 'William', address: 'Central st 954' },
        { id: 13, name: 'Chuck', address: 'Main Road 989' },
        { id: 14, name: 'Viola', address: 'Sideway 1633' }
    ];
    dbo.collection("Employee").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});*/


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("EmployeeDB");
    dbo.collection("Employee").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });