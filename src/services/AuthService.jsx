import axios from "axios";

const AuthService = {
  login: async (email, password) =>  {
    const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login",
    {
      "email": email,
      "password": password
    })
    console.log(response);

    if(response.data.access_token){
      localStorage.setItem("user", JSON.stringify(response.data)) // access_token bilgisini stringe cevirdik.
    }
    return response.data
  },

  logout: () => {
    localStorage.removeItem("user")
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"))  // gelen stringi json'a çevirdik.
  }

}
export default AuthService;
