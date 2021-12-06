import axios from "axios";
import { BASE_API_URL } from "../../config/config";
import { getAccessToken } from "../../auth/Authenticator";

    
const getDiscussionList = async() => {
    
    let accessToken = getAccessToken();
    const resp = await axios.get(`${BASE_API_URL}/creatediscussion`,
    {
        headers: {
            "X-access-token": accessToken
        }
    });
    
    return resp;
}

export default getDiscussionList;