import axios from "axios";

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNjAwMzgyMSwiZXhwIjoxNjM2MDA3NDIxfQ.uTQHRMZ6UWKCEOZqniO2mJmNs9OjRX3sF-6U6EGnbkA";

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