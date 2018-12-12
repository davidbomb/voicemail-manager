import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import { topic } from 'firebase-functions/lib/providers/pubsub';


admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// Get a reference to the database service
var db = admin.database();

 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

//  export const getData = functions.database.ref('/user/user01/rsr')
//      response.send(FirebaseDatabase.getInstance().getReference("produit");)
//  })

 function storeEmail(userId, email, topic, sender) {
    db.ref('/user/user01/rsr' + userId).set({
      email: email,
      topic: topic,
      sender: sender
    });
  }

  storeEmail(1, "dehzhudez", "topiiiic", "Marc")


 exports.addMessage
