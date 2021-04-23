import http from "./../shared/CommonJS";

class UserService {
    // For getting NIC for transactions
    getUser(nic) {
        return http.get(`/citizen/${nic}`);
    }
    // For registering citizen
    register(registrationData) {
        console.log(registrationData)
        return http.post(`/citizens`, registrationData);
    }
    // For retriveing checkin status
    checkInStatus() {
        var nic = 123
        const status = http.post(`/citizens/${nic}/checkinstatus`);
        console.log(status)
        return status;
    }
    // for marking activity history
    checkIn(checkInData) {
        return http.post(`/citizens/checkin`, checkInData);;
    }
}

export default new UserService()