import { FaReact, FaNode } from "react-icons/fa";
import { SiShadcnui, SiNextdotjs, SiSocketdotio, SiRedux } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb"; 
import { DiMongodb } from "react-icons/di";
type Api = {
    Index: string 
    Name: string
    Progress: number 
};

const SkillApi: Api[] = [
    {
        Index: "1", 
        Name: 'React',
        Progress: 85, 
    }, 
    {
        Index: "2", 
        Name: 'Node.Js',
        Progress: 85, 
    }, 
    {
        Index: "3", 
        Name: 'Redux Toolkit',
        Progress: 95, 
    }, 
    {
        Index: "4", 
        Name: 'Mongodb',
        Progress: 80, 
    }, 
    {
        Index: "5", 
        Name: 'Tailwind Css',
        Progress: 95, 
    }, 
    {
        Index: "6", 
        Name: 'Html/Css',
        Progress: 95, 
    }, 
]
export default SkillApi;