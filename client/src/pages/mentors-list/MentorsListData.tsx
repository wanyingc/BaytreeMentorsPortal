import axios from "axios";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNjA4Nzk4MCwiZXhwIjoxNjM2MDkxNTgwfQ.yGkgfWh--S-gjiyns7Y8yn3hLNHhWVht29YlTfWDobU";

const getMentorList = async() => {
    const resp = await axios.get(`http://localhost:8080/auth/admin/mentorlist`,
    {
        headers: {
            "X-access-token": accessToken
        }
    });
    return resp;
}

export default getMentorList;