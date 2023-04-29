import axios from "axios";

const URL = "https://vercel-backend-breathe.vercel.app/";

class AuthService {
  login(email, password) {
    return axios
      .post(URL + "/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("userToken", res.data.accessToken);

          // localStorage.setItem("userToken", JSON.stringify(res.data));
          localStorage.setItem(
            "Name",
            res.data.user.FirstName + " " + res.data.user.LastName
          );
          localStorage.setItem("Id", res.data.user.id);
        }
        return res.data;
      });
  }
  logout() {
    localStorage.removeItem("userToken");
    res.status(200).send({});
  }
  signup(FirstName, LastName, email, password, confirmPassword) {
    return axios.post(URL + "/signup", {
      FirstName,
      LastName,
      email,
      password,
      confirmPassword,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("userToken"));
  }
}

export default new AuthService();
