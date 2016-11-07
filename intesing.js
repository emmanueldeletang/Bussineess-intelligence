db.destination.drop()


var max = db.source1.find().count()


for (i=1 ; i < max ; i++){
var s1 = db.source1.findOne({"id":i},{_id:0});
var s2 = db.source3.findOne({"id":i}, {_id: 0,"adress.street":1,"adress.pays":1,"adress.city":1,"medicament":1})
var s3 = db.source2.findOne({id:i},{_id:0,"different username ":1 ,"pro.company":1,"pro.adresse":1})
db.destination.insert(s1)
db.destination.update({id:i},{$set:s2},{upsert:true})
db.destination.update({id:i},{$set:s3},{upsert:true})
}

