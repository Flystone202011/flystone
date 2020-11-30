import axios from "axios";
//コンポーネントでwebAPIとの処理を書くのではなく、
//action部分を分割して呼び出す形にしている。

export const submitNewUser = (values, history) => {
  axios
    .post("/api/users", values)
    .then((res) => {
      history.push("/userList");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const submitUpdateUser = (id, values, history) => {
  axios
    .post("/api/users/" + id, values)
    .then((res) => {
      history.push("/userList");
    })
    .catch((err) => {
      console.log(err);
    });
};
