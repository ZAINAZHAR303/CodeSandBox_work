import { app, database } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
function DataBaseText() {
  const collectionRef = collection(database, "users");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const auth = getAuth();
    try {
     await addDoc(collectionRef,{
        email: data.email,
        password: data.password
     })
     console.log("data added")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

export default DataBaseText;
