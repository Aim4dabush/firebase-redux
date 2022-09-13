import "./App.css";
import { useEffect, useState } from "react";

//firebase
import app from "./Firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

//redux
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./Store/slices/UserSlice";

//component
import User from "./Components/User/User";
import AddUser from "./Components/AddUser/AddUser";
import EditUser from "./Components/EditUser/EditUser";

function App() {
  const dispatch = useDispatch();
  const editMode = useSelector((state) => state.user.mode.editUser);
  const addMode = useSelector((state) => state.user.mode.addUser);
  const [users, setUsers] = useState([]);

  const addUserHandler = () => {
    dispatch(userActions.add(true));
  };

  useEffect(() => {
    let ref = collection(app, "user");
    const unsub = onSnapshot(ref, (info) => {
      let arr = [];
      info.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setUsers(arr);
    });

    return () => unsub;
  }, [dispatch]);

  const userMap = users.map((user) => {
    return <User key={user.id} id={user.id} age={user.age} name={user.name} />;
  });

  return (
    <div className="App">
      <button onClick={addUserHandler}>Add User</button>
      {!editMode && !addMode && userMap}
      {addMode && <AddUser />}
      {editMode && <EditUser />}
    </div>
  );
}

export default App;
