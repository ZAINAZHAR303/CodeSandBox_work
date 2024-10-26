import "./styles.css";
import DataBaseText from "./DataBaseTest";
// import { useState } from "react";
// import { app, database } from "../firebase.config";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function App() {
  // let auth = getAuth();
  // let GoogleProvider = new GoogleAuthProvider();
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const auth = getAuth();
  //   try {
  //     const response = await signInWithPopup(auth, GoogleProvider);
  //     console.log(response.user); // This will be logged after successful registration
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="App">
      {/* <form>
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(event) =>
            setData({ ...data, password: event.target.value })
          }
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form> */}

      <DataBaseTest />
    </div>
  );
}
