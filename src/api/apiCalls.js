import axios from 'axios';

export const signup =(body) =>{

   return axios.post("/api/1.0/users", body,{headers: {'accept-language':'tr'}})

}

export const login = (crends)=>{
      
      return axios.post("/api/1.0/auth", {},{auth:crends});

}


export const ChangeLanguage=(language)=>{

      axios.defaults.headers['accept-language']=language;

}