# Stuff

- Database is a way of storing information, retrieving, updating and deleted.
- Relational and non-relational.
  - Relational databases are arranged in a manner where the data is separated from other data, but has a way of describing the relationship between the different pieces of data.
    - (Postgres)(mySQL) SQL is a relational database
  - Non-relational databases are arranged in a inceptive manner. With information storing related information, storing related information, storing related information...
    - Mongo is non relational (document based).

```
  var blogPost = {
    name: 'hello blog',
    date: 'today',
    comments: [
      {
        title: 'this post sucks',
        body: 'I really think it was offensive',
        author:{
          name:'etc'
        }
      }
    ];
  }
```

- Databases often have or don't have a schema
  - Schema means a tight set of rules on what you can put in the database and what you can't.
  - Mongo is schemaless
  - SQL has schemas

- Two reasons Mongo works well with JS
  - Javascript objects are generally no relational  document oriented, meaning you can have things in things in things.
  - Mongo doesn't care what you put in it, and Javascript doesn't care about types.

- CRUD = Create, Retrieve, Update, Delete

# Mongo Terms

- *Database* : This is a set of collections.
  - Example: an application would have a single database to store its user, inventory, blog posts, comments collections.
- *Collection* : This is a set of like documents, a list of like things.
  - Example: Users collection is a list of user documents.
  - Example2: Blog collection is a list of blog documents.
- *Document* : A document is the stored data.
  - Example: users data like password, username, email address would be a document in the Users collection.
  - Example: each blog post would be a document in the Blogs collection.

# Mongo

1. Installation on OSX
```
brew update #update brews repo list
brew install mongodb #install mongodb
sudo mkdir -p /data/db #create data and db directories
sudo chown -R $USER /data/db #give current user ownership of directories
#to have launchd start mongodb at login:
ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
#Then to load mongodb now:
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
```
1. Running
```
mongod #launches the daemon in the background, don't need to do this if you set up the launchctl daemon.
mongo #opens up an interactive shell
```
1. Create or use a database
```
use databaseName
```
1. Show all databases
```
show dbs
```
1. Create collections
```
db.createCollection(name)
```
1. Show all collections:
```
show collections
```

# CRUD Operations

1. Insert (Create):
```
db.collectionName.insert({
  name: 'jordan',
  email: 'fakeemail@gmail.com'
  })
```

2. Query (Read):
```
db.collectionName.find()
```
```
db.collectionName.find({ email: 'fakeemail@gmail.com' })
```

3. Update:
```
db.collectionName.update(
    { item: "MNO2" }, //query param
    { $set: { "details.model" : "1234"} }
)
```

4. Delete:
```
db.collectionName.remove( { email : "jordan@fake.net" } )
```

# Exercise

1. Create a database
1. Create two collections for the database.
1. Create 10 unique documents in each collection.
1. Retrieve 5 items from each collection.
1. Update half the documents in each collection.
1. Delete 2 documents in each collection.
1. Retrieve the entire collection
