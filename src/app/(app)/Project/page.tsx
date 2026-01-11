"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import GetDataCall from "./getData"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Fragment } from "react";

export default function page() {
    const data = [...GetDataCall];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 z-[1] lg:grid-cols-3 dark:text-white justify-items-center">
            {
                data?.map((Value) => {
                    // console.log(Value.Index, "value", data)
                    const Icon = Value.Code;
                    return (
                        <Fragment key={Value.Index}>
                            <div className='cols-1 px-7 py-7' >
                                <Card className="w-[350px] h-full dark:bg-gray-700 border-2 border-[#ff6600] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20">
                                    <CardHeader>
                                        <CardTitle>{Value.Name}</CardTitle>
                                        <div className="container py-2">
                                            <span className="px-2">
                                                <Button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        window.open(Value.Link, "_blank", "noopener,noreferrer");
                                                    }}
                                                    variant="ghost"
                                                    className="rounded-md border-2 border-slate-400"
                                                >
                                                    Repositorie
                                                </Button>
                                            </span>
                                            {Value.Preview !== '' ?
                                                <Button onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(Value.Preview, "_blank", "noopener,noreferrer");
                                                }}
                                                    variant="ghost"
                                                    className="rounded-md border-2 border-slate-400"
                                                >Live Preview</Button>
                                                : null}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <Image src={Value.Image}
                                            priority={true}
                                            width={500}
                                            height={100}
                                            alt={Value.Name} style={{ height: "150px", objectFit: "cover" }} />
                                    </CardContent>
                                    <CardFooter>
                                        {Value.Code}
                                    </CardFooter>
                                </Card>
                            </div>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
