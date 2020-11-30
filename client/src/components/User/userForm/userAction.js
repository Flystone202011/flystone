import axios from "axios";

export const submitNewUser = (values, history) => {
  axios
    .post("/api/users", values)
    .then((res) => {
      console.log(res.data);
      history.push("/userList");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const submitUpdateUser = (id, values, history) => {
  axios
    .put("/api/users/" + id, values)
    .then((res) => {
      console.log(res.data);
      history.push("/userList");
    })
    .catch((err) => {
      console.log(err);
    });
};
