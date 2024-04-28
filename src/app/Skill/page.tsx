"use client"

import { Progress } from "@/components/ui/progress"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SkillApi from "./Skilldata";

export default function page() {
    const data = [...SkillApi];
    return (
        <Card className="mx-7 my-7">
            <div className="grid grid-cols-2   z-[1]  dark:text-white">
                {
                    data?.map((Value, index) => {
                        // console.log(Value.Code.keys, "value", data) 
                        return (
                            <div className='cols-1 px-7 py-7' key={Value.Index}>
                                <CardHeader >
                                    <CardTitle>
                                        <div className="grid grid-cols-2   z-[1]  dark:text-white">
                                            <span className=" cols-1">{Value.Name}</span>
                                            <span className=" cols-1">{Value.Progress}%</span>
                                        </div>
                                    </CardTitle> 
                                    <CardTitle>
                                        <Progress value={Value.Progress} className="w-[60%]" />
                                    </CardTitle>
                                </CardHeader>
                            </div>
                        )
                    })
                }
            </div>
        </Card>
    )
}