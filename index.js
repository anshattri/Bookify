const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Middleware Setup
app.use(cors());

app.use(express.json());

// MongoDB configuration
const uri = "mongodb+srv://mernbookstore:LQI58IPZ2FboNbNg@cluster0.osfuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let bookCollection;

// Initialize MongoDB client and set up routes
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB");

    // Create a collection of documents
    bookCollection = client.db("BookInventory").collection("books");

    // Insert a book to the DB: POST method
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.status(201).send(result);
      } catch (error) {
        console.error("Error inserting book:", error);
        res.status(500).send({ error: "Failed to insert book" });
      }
    });

    //update a book data:patchor update methods
    app.patch("/books/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
  
      const updateDoc = {
          $set: {...updateBookData},
      };
      const options = { upsert: true };
  
      try {
          const result = await bookCollection.updateOne(filter, updateDoc, options);
          if (result.matchedCount === 0) {
              return res.status(404).send({ error: 'Book not found' });
          }
          res.send(result);
      } catch (error) {
          res.status(500).send({ error: 'Update failed', details: error.message });
      }
  });
  
    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
  
      try {
          const result = await bookCollection.deleteOne(filter);
          if (result.deletedCount === 0) {
              return res.status(404).send({ error: 'Book not found' });
          }
          res.send({ message: 'Book deleted successfully' });
      } catch (error) {
          res.status(500).send({ error: 'Deletion failed', details: error.message });
      }
   });

    //find by category
    app.get("/all-books",async(req,res)=>{
      let query={};
      if(req.query?.category)
      {
        query={category:req.query.category}
      }
      const result= await bookCollection.find(query).toArray(); 
      res.send(result);
    })
  

    //to get single book data
    app.get("book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});