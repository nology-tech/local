import { doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { loginUser } from "../api/userService";
import { auth, db } from "../firebase";

export const UserContext = new createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // uses logged in user id to find a matching item in the database
  const [data] = useDocument(doc(db, "users", auth.currentUser?.uid ?? "-1"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  // login to default user
  // remove this when sign in functionality is complete
  useEffect(() => {
    loginUser("test@test.com", "password123!");
  }, []);

  // checks for logged in user details and applies to user state
  useEffect(() => {
    if (data?.exists()) setUser(data?.data());
  }, [data]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
