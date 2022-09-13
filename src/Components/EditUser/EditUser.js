import React, { useRef } from "react";

//firebase
import app from "../../Firebase/config";
import { doc, updateDoc } from "firebase/firestore";

//redux
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../Store/slices/UserSlice";

function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const age = useRef(null);
  const name = useRef("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const ref = doc(app, "user", user.id);
    await updateDoc(ref, {
      name: name.current.value,
      age: age.current.value,
    });
    dispatch(userActions.edit(false));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" ref={age} />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" ref={name} />
        </div>
        <button>update</button>
      </form>
    </div>
  );
}

export default EditUser;
