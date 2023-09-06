import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = 'mongodb+srv://sandy4adhi:prabfamily@cluster0.gvikmtt.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const sendform = async(data)=> {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const db = client.db("babycare").collection("forms");
    const res = await db.insertOne(data);
    return res.acknowledged;
  }
  catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
finally {
    await client.close();
  }
  
}

export{sendform}








//   const findQuery = { prepTimeInMinutes: { $lt: 45 } };

//   try {
//     const cursor = await collection.find(findQuery).sort({ name: 1 });
//     await cursor.forEach(recipe => {
//       console.log(`${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`);
//     });
//     // add a linebreak
//     console.log();
//   } catch (err) {
//     console.error(`Something went wrong trying to find the documents: ${err}\n`);
//   }

//   // We can also find a single document. Let's find the first document
//   // that has the string "potato" in the ingredients list.
//   const findOneQuery = { ingredients: "potato" };

//   try {
//     const findOneResult = await collection.findOne(findOneQuery);
//     if (findOneResult === null) {
//       console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
//     } else {
//       console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
//     }
//   } catch (err) {
//     console.error(`Something went wrong trying to find one document: ${err}\n`);
//   }

//   /*
//    * *** UPDATE A DOCUMENT ***
//    *
//    * You can update a single document or multiple documents in a single call.
//    *
//    * Here we update the PrepTimeInMinutes value on the document we
//    * just found.
//    */
//   const updateDoc = { $set: { prepTimeInMinutes: 72 } };

//   // The following updateOptions document specifies that we want the *updated*
//   // document to be returned. By default, we get the document as it was *before*
//   // the update.
//   const updateOptions = { returnOriginal: false };

//   try {
//     const updateResult = await collection.findOneAndUpdate(
//       findOneQuery,
//       updateDoc,
//       updateOptions,
//     );
//     console.log(`Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to update one document: ${err}\n`);
//   }

//   /*      *** DELETE DOCUMENTS ***
//    *
//    *      As with other CRUD methods, you can delete a single document
//    *      or all documents that match a specified filter. To delete all
//    *      of the documents in a collection, pass an empty filter to
//    *      the DeleteMany() method. In this example, we'll delete two of
//    *      the recipes.
//    */


//   const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
//   try {
//     const deleteResult = await collection.deleteMany(deleteQuery);
//     console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
//   } catch (err) {
//     console.error(`Something went wrong trying to delete documents: ${err}\n`);
//   }

//   // Make sure to call close() on your client to perform cleanup operations
//   await client.close();
// }
// run().catch(console.dir);