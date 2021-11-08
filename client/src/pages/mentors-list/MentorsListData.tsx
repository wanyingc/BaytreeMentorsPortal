import axios from "axios";
import { getAccessToken } from "../../auth/Authenticator";

    
const getMentorList = async() => {
    
    let accessToken = getAccessToken();
    const resp = await axios.get(`http://localhost:8080/auth/admin/mentorlist`,
    {
        headers: {
            "X-access-token": accessToken
        }
    });
    
    return resp;
}

export default getMentorList;