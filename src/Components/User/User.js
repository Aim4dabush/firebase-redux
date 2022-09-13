import React from "react";

//styles
import "./User.css";

//firebase
import app from "../../Firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//redux
import { useDispatch } from "react-redux";

//actions
import { userActions } from "../../Store/slices/UserSlice";

function User({ id, age, name }) {
  const dispatch = useDispatch();

  const deleteUserHandler = async () => {
    const ref = doc(app, "user", id);
    await deleteDoc(ref);
  };

  const editUserHandler = () => {
    dispatch(userActions.edit(true));
    dispatch(userActions.userData({ id: id, age: age, name: name }));
  };

  return (
    <div className="user">
      <h1>{name}</h1>
      <p>{age}</p>
      <button onClick={editUserHandler}>Edit User</button>
      <button onClick={deleteUserHandler}>Delete User</button>
    </div>
  );
}

export default User;
