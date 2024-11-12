import http from '@/http-common';

export default class LoginService {
    async Login(data){
        let response = await http.post(`api/v1/auth?`); //Por as requisições
        return response.data;
    }
}