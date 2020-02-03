import * as React from "react";
import firebase from "./Firebase";
import SignInScreen from "./components/SignInScreen";

const {useState, useEffect} = React;

export default (): React.ReactElement => {
  const [user, setUser] = useState<firebase.User | null>();

  useEffect(() => {
    const unregister = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unregister()
  }, []);

  const logout = async (): Promise<void> => {
    await firebase.auth().signOut();
  };

  return (
    <div>
      {
        user ?
          // Logged in
          (
            <>
              <button onClick={logout}>Logout</button>
              <pre>{JSON.stringify(user, null, "\t")}</pre>
            </>
          )
          // Not login
          : (<SignInScreen/>)
      }
    </div>
  )
};
