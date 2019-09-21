import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const checkAnswer = functions.https.onCall((data, context) => {
  console.log(data);
  return admin.firestore().collection("/points").doc(data.point).get().then(snapshot => {
    const point = snapshot.data();
    console.log(point);
    if(data.answer === point!.answer)
      return admin.firestore().collection("/results").doc(data.result).get().then(resultSnapshot => {
        const result = resultSnapshot.data();
        return admin.firestore().collection("/results").doc(data.result).update({
          complete: [...result!.complete, data.point]
        }).then(() => true);
      })
    return false;
  })
});
