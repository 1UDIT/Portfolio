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
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

export default function page() {
    const data = [...GetDataCall];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 z-[1] lg:grid-cols-3 dark:text-white justify-items-center">
            {
                data?.map((Value, index) => {
                    // console.log(Value.Index, "value", data)
                    const Icon = Value.Code;
                    return (
                        <Fragment key={Value.Index}>
                            <div className='cols-1 px-7 py-7' >
                                <Card className="w-[350px] h-full">
                                    <CardHeader>
                                        <CardTitle>{Value.Name}</CardTitle>
                                        <CardDescription>
                                            <Link href={Value.Link}>
                                                <Button variant={"ghost"}>Repositorie</Button>
                                            </Link>
                                            {Value.Preview !== '' ?
                                                <Link href={Value.Preview}>
                                                    <Button variant={"ghost"}>Live Preview</Button>
                                                </Link> : null}
                                        </CardDescription>
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
