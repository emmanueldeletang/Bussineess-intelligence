# Bussineess-intelligence

hello this repository will explain how to use 360 view and BI with mongodb 

you need a VM with mongodb and biconnector install , please use a vagrant of mongo M304 lessons ... this is more easy 

make a vagrant ssh and play the init.sh 

you will have 3 source 
  -creation of simple 360 view 
  -exposition of this though BI connector 
  
  use tableau to connect to the source and view , modify a data with compass and show this is real time .... 
  
when you connect though the vagrant use this ... command to insert all and show 360 view 
rmdir -p data/db
# making sure that data/db folder is created
mkdir -p data/db

# boot up mongod
mongod --dbpath data/db --fork --logpath data/db/log

# clean 
mongo --eval "use test; db.source1.drop();db.source2.drop();db.source3.drop();db.destination.drop()"

# restore dataset
mongoimport   -d test -c source1 /dataset/source1.json --jsonArray
mongoimport   -d test -c source2 /dataset/source2.json --jsonArray
mongoimport   -d test -c source3 /dataset/source3.json --jsonArray
 
# create the 360 view 

mongo /dataset/intesing.js


# export the view  
mongodrdl  -d test -o test.drdl


mongosqld --schema test.drdl --mongo-uri mongodb://localhost:27017 --addr 0.0.0.0:4564 --fork  --logPath  test1.log

