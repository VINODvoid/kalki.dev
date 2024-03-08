"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";


interface NavLinkProps {
    link: {
        url: string;
        title: string;
    };
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
    const pathName = usePathname();
    console.log(pathName);
    
    return (
        <Link href={link.url}>{link.title}</Link>
    );
};

export default NavLink;
