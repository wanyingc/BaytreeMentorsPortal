import axios from "axios";
import { BASE_API_URL } from "../../config/config";
import { getAccessToken } from "../../auth/Authenticator";

    
const getGoalsList = async(mentorID) => {
    
    let accessToken = getAccessToken();
    const resp = await axios.post(`${BASE_API_URL}/auth/mentor/goalList`,
    {
        mentorID: mentorID,
    },
    {
        headers: {
            "X-access-token": accessToken
        }
    });
    
    return resp;
}

export default getGoalsList;