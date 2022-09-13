import React, { useRef } from "react";

//firebase
import app from "../../Firebase/config";
import { collection, addDoc } from "firebase/firestore";

//reducx
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/slices/UserSlice";

function AddUser() {
  const dispatch = useDispatch();
  const age = useRef();
  const name = useRef();

  const addUserHandler = async (e) => {
    e.preventDefault();
    const ref = collection(app, "user");
    await addDoc(ref, {
      age: age.current.value,
      name: name.current.value,
    });
    dispatch(userActions.add(false));
  };

  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" ref={age} />
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={name} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default AddUser;
