
import { CiCoins1 } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";

import { AiFillMail } from "react-icons/ai";

export const headerMenus = [
    {
        title: "전체",
        icon: <CiBullhorn />,
        src: "/"
    },
        {
        title: "소개",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "회사 이력",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "작업 리스트",
        icon: <CiCoins1 />,
        src: "/port"
    },
];


export const snsLink = [
    {
        title: "gmail",
        url: "mailto:imyourbom@gmail.com",
        icon: <AiFillMail />
    }
]