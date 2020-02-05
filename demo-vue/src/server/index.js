import Axios from "axios";

export const login = function() {
  Axios.get('/api/login').then((res) => {
    alert(res.data.data);
  })
}
