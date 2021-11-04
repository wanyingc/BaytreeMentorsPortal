import axios from "axios";
import { isPlainObject } from "jquery";

interface IUserInfo extends Document {
    personID:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:number|string;
    startDate:Date|string;
};

const getMentorList = async() => {
    const resp = await axios.get(`http://localhost:8080/auth/admin/mentorlist`,
    {
        headers: {
            "X-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNTk5MTIzMCwiZXhwIjoxNjM1OTk0ODMwfQ.fv1RaMZ48Sxvi2F7owE3rG0xVE_EY19clldMQ_tbGHM"
        }
    });
    console.log(resp.data);
    return resp.data["result"];
}

// const resp = axios.get(`http://localhost:8080/auth/admin/mentorlist`,
//     {
//         headers: {
//             "X-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJ0LmNvbSIsImlhdCI6MTYzNTk5MTIzMCwiZXhwIjoxNjM1OTk0ODMwfQ.fv1RaMZ48Sxvi2F7owE3rG0xVE_EY19clldMQ_tbGHM"
//         }
//     });
//     console.log(resp.data);

const mentors = [
    {
        mentorName: "John Smith",
        email: "abc@example.com",
        phoneNumber: "0123456789"
    }, 
    {
        mentorName: "James Walsh",
        email: "cde@example.com",
        phoneNumber: "3337375466"
    },
    {
        mentorName: "ABCDE AAA",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "A B",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "C D",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "E F",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "G H",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "I J",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "K L",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "X Y",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    },
    {
        mentorName: "T U",
        email: "ace@example.com",
        phoneNumber: "6663255412"
    }
];

export default getMentorList;