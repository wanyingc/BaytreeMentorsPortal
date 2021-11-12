import axios from "axios";
import { BASE_API_URL } from "../../config/config";
import { getAccessToken } from "../../auth/Authenticator";

    
const getMentorList = async() => {
    
    let accessToken = getAccessToken();
    const resp = await axios.get(`${BASE_API_URL}/auth/admin/mentorlist`,
    {
        headers: {
            "X-access-token": accessToken
        }
    });
    
    return resp;
}

export default getMentorList;