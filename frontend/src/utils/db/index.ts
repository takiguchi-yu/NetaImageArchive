import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log('Firebase admin initialization error', e.stack);
    }
  }
}
export default admin.firestore();
