import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import { topic } from 'firebase-functions/lib/providers/pubsub';


admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// Get a reference to the database service
const db = admin.database();

 export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

//  export const getData = functions.database.ref('/user/user01/rsr')
//      response.send(FirebaseDatabase.getInstance().getReference("produit");)
//  })
exports.addMessage = functions.https.onRequest((req, res) => {
  return db.ref('/test/rsr/email').push({
    payload: "pyld",
    refcnt: "rob"
  }).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
    return;
  });
});




  


 

 exports.storeEmail = functions.https.onRequest((req, res) => {
    return db.ref('/users/user01/rsr/email').push(
      {
        msgId: req.query.msgId,
        payload: req.query.payload,
        refcnt: req.query.refcnt    
    }).then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      res.status(200).send("Email successfully added to the database !");
    })
  })


 exports.setMaxNotif = functions.https.onRequest((req, res) => {
  return db.ref('/users/user01/ctx/email/cntNotif/max')
  .set(parseInt(req.query.max, 10))
  .then( () => {
    res.status(200).send("Max Notifs number successfully set !");
  })
  .catch( error => {
    console.log(error);
    return error
  })
})


// if (currentData.getValue() == null) {
//   currentData.setValue(1);
// } else {
//   currentData.setValue((Long) currentData.getValue() + 1);
// }
// return Transaction.success(currentData);
// }

exports.increaseNotifCounter = functions.https.onRequest((req, res) => {
  db.ref('/users/user01/ctx/email/cntNotif/').once("value")
  .then(function(snapshot) {
    db.ref('/users/user01/ctx/email/cntNotif/').set({
        cnt: snapshot.val().cnt + 1,
        max: snapshot.val().max
    })
    .then(() => {
      res.status(200).send("Counter successfully increased ! " + snapshot.val().cnt + 1);
    })
    .catch( error => {
      console.log(error);
      return error
    })
  })
  .catch( error => {
    console.log(error);
    return error
  })
})

// function readNotifCounter(){
//   return new Promise(function(resolve) {
//     const counterRef = db.ref('/users/user01/ctx/email/cntNotif');
//     counterRef.on('value', counterSnapshot => {
//       resolve(counterSnapshot);
//     });
//   })
// }

// exports.increaseNotifCounter = functions.https.onRequest((req, res) => {
//   readNotifCounter()
//   .then( counterSnapshot => {
//     counterSnapshot.val().cnt 

//     var newCounter = 4;
//     db.ref('/users/user01/ctx/email/cntNotif/')
//     .set({
//       cnt: newCounter
//       })
//     .catch( error => {
//       console.log(error);
//       return error
//     })
//   })
//   .then( () => { res.status(200).send("Counter successfully increased !") })
//   .catch( error => {
//     console.log(error);
//     return error
//   })
// })

    //   });
//   }).then((snapshot) => {
//     // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
//     res.status(200).send("Counter successfully set !");
//   })
// })

  //storeEmail(1, "dehzhudez", "topiiiic", "Marc")


 //exports.addMessage
