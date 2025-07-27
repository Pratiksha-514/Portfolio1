// src/services/firebase.service.js
import { db } from "../../environment"; // Make sure this points to firebase.js or firebase.config.js
import { collection, addDoc, Timestamp } from "firebase/firestore";

export async function saveContactedUser(userData) {
  try {
    const docRef = await addDoc(collection(db, "contactedUsers"), {
      name: userData.name,
      email: userData.email,
      message: userData.message,
      createdAt: Timestamp.now()
    });
    console.log("User contact saved with ID: ", docRef.id);
  } catch (error) {
    console.error("Error saving user contact: ", error);
  }
}
