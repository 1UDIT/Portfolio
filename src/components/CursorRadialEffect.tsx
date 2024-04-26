"use client"

import React, { useEffect, useState } from 'react'

interface RadialGradientProps {
    scale: string;
    opacity: string;
    position?: string;
    overflow?: string;
}

export default function CursorRadialEffect({
    scale,
    opacity,
    position,
    overflow,
}: RadialGradientProps) {
    const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
    const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
            const newMouseYPercentage = Math.round(
                (event.pageY / windowHeight) * 100
            );

            setMouseXPercentage(newMouseXPercentage);
            setMouseYPercentage(newMouseYPercentage);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    const radialGradientStyle: React.CSSProperties = {
        background: `radial-gradient(100px  at ${mouseXpercentage}% ${mouseYpercentage}%, rgba(255, 106, 61, 0.5), transparent 70%)`,
    };

    return (

        <div
            // rotate-180 for mirrored effect
            className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1]   ${opacity} ${scale} ${overflow}`}
            style={radialGradientStyle}
        ></div>
    )
}
