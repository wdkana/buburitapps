import admin from 'firebase-admin'
import { fireConfig } from './firebaseConfig'

try {
  admin.initializeApp({
    credential: admin.credential.cert(fireConfig),
  })
  console.log('Initialized.')
} catch (error) {
    console.log(error)
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack)
  }
}

export default admin