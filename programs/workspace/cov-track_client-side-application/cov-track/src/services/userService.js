import http from "./../shared/CommonJS";

class UserService {

    getUser(nic) {
        return http.get(`/user/${nic}`);
    }

    register(registrationData) {
        console.log(registrationData)
        return http.post("/user-register", registrationData);
    }

}

export default new UserService()