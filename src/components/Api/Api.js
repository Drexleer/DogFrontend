import axios from "axios";

export const onSearch = async (name) => {
    try {
        let URL = `http://localhost:3001/dogs?name=${name}`;
        let response = await axios.get(URL);
        let { data } = response;
        return data;
        
    } catch (error) {
      alert(error.response.data);
    }
  };

  export const allDogs = async () => {
    try {
        let URL = `http://localhost:3001/alldogs`; //?limit=${limit}
        let response = await axios.get(URL);
        let { data } = response;
        console.log(data)
        return data;
        
    } catch (error) {
      alert(error.response.data);
    }
  };