import React, { useState } from "react";
import cn from 'classnames';
import Briefcase from "../../assets/svgs/briefcase.svg";
import Lock from "../../assets/svgs/lock.svg";
import Certificate from "../../assets/svgs/certificate.svg";
import Trophy from "../../assets/svgs/trophy.svg";
import { Timestamp } from "../base/timestamp";
import {
    Proje as ProjeProps,
    ProjeType,
    Proje,
} from "../../types/proje";

import { NotionRenderer } from "react-notion";

const ProjeIcon: React.FC<{
    type: ProjeType;
    className?: string;
}> = ({ type, ...props }) => {
    switch (type) {
        case "award":
            return <Trophy {...props} />;
        case "education":
            return <Certificate {...props} />;
        case "work":
            return <Briefcase {...props} />;
        case "security":
            return <Lock {...props} />;
    }
};

const ProjeRow: React.FC<ProjeProps> = ({
   title,
   date,
   endDate,
   type,
   blockMap,
                                              }) => (
    <div
        className="flex items-center my-8 animate-enter achievement-notion"
        style={{
            animation: "enter 300ms ease-out",
        }}
    >
        <ProjeIcon className="w-10 md:w-24" type={type} />
        <h4 className="flex-1 mx-4" >

            <div className="font-semibold " >{title}</div>
            <div className={cn( "text-color-primary")}>
                <NotionRenderer  blockMap={blockMap} />
            </div>
        </h4>
        <div className={cn( "text-color-primary")} >
            <Timestamp
                className="border-l pl-2 ml-2"
                date={new Date(date)}
                endDate={new Date(endDate)}
            />
        </div>
    </div>
);

export const Projeler: React.FC<{ projeler: Proje[] }> = ({
                                                                 projeler,
                                                                        }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="container my-16 ">
            <div className="m-auto max-w-3xl ">
                <h1 className="text-4xl font-bold">Projeler</h1>
                <div className="text-2xl pb-8" >Giriştiğim ve girişeceğim işler</div>
                <div className="my-4 ">
                    {projeler
                        .filter(a => showMore || a.highlight)
                        .map((a, i) => (
                            <ProjeRow key={i} {...a} />
                        ))}
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-2 py-1  border border-gray-300 rounded shadow-xs"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? "Daha az göster ↑" : "Daha fazla göster ↓"}
                    </button>
                </div>
            </div>
        </div>
    );
};