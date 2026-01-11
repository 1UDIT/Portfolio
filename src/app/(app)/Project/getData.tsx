import { FaReact, FaNode } from "react-icons/fa";
import { SiShadcnui, SiNextdotjs, SiSocketdotio, SiRedux, SiMongodb, SiNodedotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
type Api = {
    Index: number
    Image: string
    Name: string
    Link: string
    Preview: string
    Code: React.ReactElement[] 
};

const GetDataCall: Api[] = [
    {
        Index: 1,
        Image: `/img/Feedback.png`,
        Name: 'FeedBack Web',
        Link: "https://github.com/1UDIT/chatBox",
        Preview: 'https://feedbackchat.vercel.app/',
        Code: [
            <SiNextdotjs key="SiNextdotjs" className="h-6 w-12 " />, <SiMongodb key="SiMongodb" className="h-6 w-12 " />
        ] 
    },
    {
        Index: 2,
        Image: `/img/magicalui.png`,
        Name: 'React Component Library',
        Link: "https://github.com/1UDIT/magicalUi",
        Preview: 'magicalui.vercel.app',
        Code: [
            <SiNextdotjs key="SiNextdotjs" className="h-6 w-12 " />, <DiMongodb key="DiMongodb" className="h-6 w-12 " />
        ] 
    },
    {
        Index: 3,
        Image: `/img/Shopping.png`,
        Name: 'Shopping-Web-Nextjs',
        Link: "https://github.com/1UDIT/Shopping-Web-Nextjs",
        Preview: "https://shopping-web-nextjs.vercel.app/",
        Code: [
            <SiNextdotjs key="SiNextdotjs" className="h-6 w-12 " />, <SiRedux key="SiRedux" className="h-6 w-12 " />
        ] 
    },
    {
        Index: 4,
        Image: `/img/Socket.png`,
        Name: 'Video Streamming App',
        Link: "https://github.com/1UDIT/Frontend-VideoStream",
        Preview: '',
        Code: [
            <SiNextdotjs key="SiNextdotjs" className="h-6 w-12 " />, <SiRedux key="SiRedux" className="h-6 w-12 " />, <SiNodedotjs key='SiNodedotjs' className="h-6 w-12 " />
        ] 
    },


]
export default GetDataCall;