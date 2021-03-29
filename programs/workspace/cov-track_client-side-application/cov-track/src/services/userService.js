import http from "./../shared/CommonJS";

class UserService {

    getUser(nic) {
        return http.get(`/customer/${nic}`);
    }

    register(registrationData) {
        console.log(registrationData)
        return http.post("/customer-register", registrationData);
    }
    login(loginData) {
        console.log(loginData)
        return http.post("/customer-login", loginData);
    }
    checkInStatus() {
        var nic = 123
        const status = http.post(`/customer-checkin-status/${nic}`);
        console.log(status)
        return status;
    }
    checkIn(checkInData) {
        return http.post(`/customer-checkin`, checkInData);;
    }
}

export default new UserService()