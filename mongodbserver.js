var MongoClient = require('mongodb').MongoClient;


// Connect to the db
// mongodb 預設資料庫為test
MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    var db = db.db('test');
    // 重要，3.x 版本之後都要這行。因版本問題 db 變數要設定路徑，最後一個 db 為 function 的第二個函數變數

    db.collection('Persons', function (err, collection) {
        
    //	collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //	collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
    //	collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        collection.remove({id:2},{w:1},function(err,result){
            if(err) throw err;
            console.log('Document Removed Successfully!');
        });


        db.collection('Persons').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});