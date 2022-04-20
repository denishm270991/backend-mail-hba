// const { Router } = require('express');
// const router = Router();
// const admin = require('firebase-admin');
// const db = require('../config/config_firebase.js');
// var serviceAccount = require("../../hba2022-e5821-firebase-adminsdk-7xrwg-196e8b93a0.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://hba2022-e5821-default-rtdb.firebaseio.com/'
// });
// const db = admin.database();

// router.get('/', (req, res) => {
//     db.ref('users').once('value', (snapshot) => {
//         const data = snapshot.val();
//         res.send(data);
//     });
// });

// router.post('/', (req, res) => {
//     const newUser = {
//         uid: req.body.uid,
//         email: req.body.email,
//         displayName: req.body.displayName,
//         emailVerified: req.body.emailVerified
//     }
//     db.ref('users').push(newUser);
//     res.send('received');
// });

// module.exports = router;