import admin from '../../../config/firebase'

export default async function handler(req, res) {
    const firebase = admin.firestore()
    return new Promise((resolve, reject) => {
       firebase.collection('buburit').get()
        .then((data) => {
           var test =  data.docs.map(entry => entry.data())
          res.status(200).json({ test })
          res.end()
          resolve()
        })
        .catch((e) => {
          res.status(405).json(e)
          res.end()
          resolve()
        })
    })

}