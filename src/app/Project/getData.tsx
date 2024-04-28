import { FaReact, FaNode } from "react-icons/fa";
import { SiShadcnui, SiNextdotjs, SiSocketdotio, SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; 
import { DiMongodb } from "react-icons/di";
type Api = {
    Index: string
    Image: string
    Name: string
    Link: string
    Preview: string
    Code: React.ReactNode[]
    indexIcon:string
};

const GetDataCall: Api[] = [
    {
        Index: "1",
        Image: `/img/AdminDashbord.png`,
        Name: 'Admin_DashBoard',
        Link: "https://github.com/1UDIT/Admin_DashBoard",
        Preview: "https://github.com/1UDIT/Admin_DashBoard",
        Code: [
            <FaReact className="h-6 w-12 "/>, <SiShadcnui className="h-6 w-12"/>
        ],
        indexIcon:"B"
    },
    {
        Index: "2",
        Image: `/img/ReactNative.png`,
        Name: 'android-app',
        Link: "https://github.com/1UDIT/android-app",
        Preview: '',
        Code: [
            <TbBrandReactNative className="h-6 w-12 "/>, <SiRedux className="h-6 w-12 "/>
        ],
        indexIcon:"C"
    },
    {
        Index: "3",
        Image: `/img/Authentication_Nextjs.png`,
        Name: 'Authentication_Nextjs',
        Link: "https://github.com/1UDIT/Authentication_Nextjs",
        Preview: "https://github.com/1UDIT/android-app",
        Code: [
            <SiNextdotjs className="h-6 w-12 "/>, "Auth.Js"
        ],
        indexIcon:"D"
    },
    {
        Index: "4",
        Image: `/img/nextjs.png`,
        Name: 'NextJs-connect-mongoDB-and-cloudinary',
        Link: "https://github.com/1UDIT/NextJs-connect-mongoDB-and-cloudinary",
        Preview: '',
        Code: [
            <FaNode className="h-6 w-12 "/>, <DiMongodb className="h-6 w-12 "/>
        ],
        indexIcon:"E"
    },
    {
        Index: "5",
        Image: `/img/Socket.png`,
        Name: 'Socket.io-Node-js',
        Link: "https://github.com/1UDIT/Socket.io-Node-js",
        Preview: '',
        Code: [
            <FaNode className="h-6 w-12 "/>, <SiSocketdotio className="h-6 w-12 "/>
        ],
        indexIcon:"A"
    },
    {
        Index: "6",
        Image: `/img/modi.avif`,
        Name: 'Shopping-Web-Nextjs',
        Link: "https://github.com/1UDIT/Shopping-Web-Nextjs",
        Preview: "https://github.com/1UDIT/android-app",
        Code: [
            <SiNextdotjs className="h-6 w-12 "/>, <SiRedux className="h-6 w-12 "/>
        ],
        indexIcon:"F"
    },
    {
        Index: "7",
        Image: `/img/NextjsMongodb.png`,
        Name: 'Blog Website',
        Link: "https://github.com/1UDIT/anime_x",
        Preview: 'https://anime-x-u121.vercel.app/',
        Code: [
            <SiNextdotjs className="h-6 w-12 "/>, <DiMongodb className="h-6 w-12 "/>
        ],
        indexIcon:"G"
    },
]
export default GetDataCall;