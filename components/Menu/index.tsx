import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, KeyboardArrowDown } from '@mui/icons-material';
import { Tabs, Tab, Popover, Button } from '@mui/material';

import {
    handleResponsive,
} from '../../helpers/utils';

const links = [
    {
        key: 1,
        path: '/home',
        title: 'Home',
        className: 'home'
    },
    {
        key: 2,
        path: '/portfolio',
        title: 'Portfolio',
        className: 'portfolio'
    },
    {
        key: 3,
        path: '/suppliers',
        title: 'Suppliers',
        className: 'suppliers'
    },
    {
        key: 4,
        path: '/careers',
        title: 'Careers',
        className: 'careers'
    },
    {
        key: 5,
        path: '/causes',
        title: 'Causes',
        className: 'causes'
    },
    {
        key: 6,
        path: '/news',
        title: 'News',
        className: 'news'
    },
    {
        key: 7,
        path: '/about-us',
        title: 'About us',
        className: 'about-us'
    }
]

const socialLinks = [
    {
        key: 1,
        path: '/home',
        icon: <Instagram />
    },
    {
        key: 2,
        path: '/portfolio',
        icon: <Facebook />
    },
    {
        key: 3,
        path: '/suppliers',
        icon: <Twitter />
    }
]

const Layout: NextPage = () => {
    const router = useRouter();
    const [isTopMenuRendered, setTopMenuRender] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        handleResponsive({
            xsCallback: () => setTopMenuRender(false),
            lgCallback: () => setTopMenuRender(true)
        });
    }, [setTopMenuRender]);
    
    return <>
        <header className='flex justify-center md:justify-between px-[100px] py-[35px]'>
            <Link
                href={{
                    pathname: '/home'
                }}
            >
                <img src="/sg-logo.png" alt="SG" width={85} height={16} className='cursor-pointer' />
            </Link>
            {
                isTopMenuRendered ? (
                    <div>
                        <ul className='flex justify-end'>
                            {socialLinks.map((link) => (
                                <li key={link.key} className="p-[11px] text-red cursor-pointer">
                                    <Link
                                        href={{
                                            pathname: link.path
                                        }}
                                    >
                                        {link.icon}
                                    </Link>
                                </li>
                            ))}
                            <li key={4} className="pl-[11px] py-[11px]">
                                <Button
                                    aria-describedby='loginLink'
                                    variant="text"
                                    onClick={() => setOpen(true)}
                                    className='text-black border-l-2 border-solid border-gray-300 pr-0 pl-4 rounded-none hover:bg-transparent'
                                >
                                    Login
                                    <KeyboardArrowDown className='text-black' />
                                </Button>
                                <Popover
                                    id="loginPopover"
                                    className='absolute top-[64px] right-0 left-[-90px]'
                                    open={open}
                                    anchorEl={undefined}
                                    onClose={() => setOpen(false)}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    >
                                    <>List items</>
                                </Popover>
                            </li>
                        </ul>

                        <ul className='flex justify-end'>
                            {links.map((link) => (
                                <li key={link.key} className={`${link.className} pl-[37px]`}>
                                    <Link 
                                        href={{
                                            pathname: link.path
                                        }}
                                    >
                                        <span className={`text-20 cursor-pointer ${link.path !== router?.pathname ? "opacity-60" : ""}`}>{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <>
                        <Tabs
                            value={false}
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="primary"
                            className="d-flex d-lg-none"
                            textColor="primary"
                            allowScrollButtonsMobile={true}
                            style={{
                                position: "fixed",
                                bottom: "0",
                                height: "unset",
                                width: "100%",
                                backgroundColor: "white",
                                zIndex: 99
                            }}
                            onChange={(e: any, value: any) => {
                                router.push(value);
                            }}
                        >
                            {links.map((link) => (
                                <Tab
                                    key={link.key}
                                    label={link.title}
                                    value={link.path}
                                    className='py-6'
                                />
                            ))}
                        </Tabs>
                    </>
                )
            }
            
        </header>
    </>
}

export default Layout