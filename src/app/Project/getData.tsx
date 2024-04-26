import { FaReact } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";

type Person = {
    Index: string
    Image: string
    Name: string
    Link: string
    Preview: string
    Code: icon[]
}
type icon = {

};

const GetDataCall: Person[] = [
    {
        Index: "1",
        Image: `/img/modi.avif`,
        Name: 'Admin_DashBoard',
        Link: "https://github.com/1UDIT/Admin_DashBoard",
        Preview: "https://github.com/1UDIT/Admin_DashBoard",
        Code: [
             <FaReact />,<SiShadcnui />
        ]
    },
    {
        Index: "2",
        Image: `/img/arvind.avif`,
        Name: 'android-app',
        Link: "https://github.com/1UDIT/android-app",
        Preview: '',
        Code: [
            "React", "shadCn UI"
        ]
    },
    {
        Index: "3",
        Image: `/img/modi.avif`,
        Name: 'Authentication_Nextjs',
        Link: "https://github.com/1UDIT/Authentication_Nextjs",
        Preview: "https://github.com/1UDIT/android-app",
        Code: [
            "React", "shadCn UI"
        ]
    },
    {
        Index: "4",
        Image: `/img/arvind.avif`,
        Name: 'NextJs-connect-mongoDB-and-cloudinary',
        Link: "https://github.com/1UDIT/NextJs-connect-mongoDB-and-cloudinary",
        Preview: '',
        Code: [
            "React", "shadCn UI"
        ]
    },
    {
        Index: "5",
        Image: `/img/modi.avif`,
        Name: 'Socket.io-Node-js',
        Link: "https://github.com/1UDIT/Socket.io-Node-js",
        Preview: '',
        Code: [
            "React", "shadCn UI"
        ]
    },
    {
        Index: "6",
        Image: `/img/modi.avif`,
        Name: 'Shopping-Web-Nextjs',
        Link: "https://github.com/1UDIT/Shopping-Web-Nextjs",
        Preview: "https://github.com/1UDIT/android-app",
        Code: [
            "React", "shadCn UI"
        ]
    },
    {
        Index: "7",
        Image: `/img/modi.avif`,
        Name: 'joer',
        Link: "https://github.com/1UDIT/Admin_DashBoard",
        Preview: '',
        Code: [
            "React", "shadCn UI"
        ]
    },
]
export default GetDataCall;