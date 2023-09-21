import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { getScreenTop } from '../helper/helpers.js'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    z-index: 9998;

    @media (min-width: 768px) {
        justify-content: space-around;
        height: 65px;
        padding: 10px 0;
    }

    @media (min-width: 1600px) {
        height: 80px;
        padding: 20px 0;

        ${({ isHeaderShrink }) =>
            isHeaderShrink &&
            css`
                height: 65px;
                padding: 10px 0;
                transition: all 0.5s;
            `}
    }
`

const LogoWrapper = styled.div`
    width: 46.4px;
    height: 28px;

    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        width: 55.63px;
        height: 33.6px;

        img {
            width: 55.63px;
            height: 33.6px;
        }
    }

    @media (min-width: 1600px) {
        width: 79.1px;
        height: 48px;

        img {
            width: 79.1px;
            height: 48px;
        }

        ${({ isHeaderShrink }) =>
            isHeaderShrink &&
            css`
                width: 55.63px;
                height: 33.6px;
                transition: all 0.5s;

                img {
                    width: 55.63px;
                    height: 33.6px;
                }
            `}
    }
`

// 漢堡排與三條槓
const Burger = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 3px 6px;

    div {
        transition: all 0.2s;
    }

    /* 三條槓變成叉叉 */
    ${({ dropdownLinksBar }) =>
        dropdownLinksBar &&
        css`
            div:nth-child(1) {
                position: absolute;
                transform: rotate(45deg);
            }
            div:nth-child(2) {
                position: absolute;
                opacity: 0;
                z-index: -9999;
            }
            div:nth-child(3) {
                position: absolute;
                transform: rotate(-45deg);
            }
        `}

    @media (min-width: 768px) {
        position: absolute;
        z-index: -9999;
        opacity: 0;
    }
`
const Bar = styled.div`
    display: block;
    width: 18px;
    height: 2px;
    margin: 2px 0;
    background-color: #000000;
`

const LinksBar = styled.div`
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: #ffffff;
    z-index: -9999;
    opacity: 0;
    transform: scale(1, 0);
    transform-origin: top;
    transition: opacity 0.2s;

    /* 手機版按漢堡排後顯示 LinksBar */
    ${({ dropdownLinksBar }) =>
        dropdownLinksBar &&
        css`
            z-index: 1;
            opacity: 1;
            transform: scale(1, 1);
        `}

    @media (min-width: 768px) {
        position: relative;
        top: 0;
        width: 100%;
        max-width: 798px;
        height: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        z-index: 1;
        opacity: 1;
        transform: scale(1, 1);

        padding-bottom: 10px;
    }

    @media (min-width: 1600px) {
        padding-bottom: 0px;

        ${({ isHeaderShrink }) =>
            isHeaderShrink &&
            css`
                padding-bottom: 10px;
            `}
    }
`

const LinksGroupWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    padding: 8px 24px;
    background-color: rgba(128, 128, 128, 0.1);

    color: #595757;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;

    white-space: nowrap;
    cursor: pointer;

    > div:nth-child(1) {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        line-height: 23px;

        /* arrow_default 切換 arrow_active */
        ${({ active }) =>
            active &&
            css`
                color: #149992;
            `}
    }

    @media (min-width: 768px) {
        width: auto;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 0;

        :hover {
            color: #149992;

            :after {
                position: absolute;
                top: 100%;
                content: '';
                display: block;
                width: 100%;
                height: 16px;
                background-color: #ffffff;
                border-bottom: 5px solid #149992;
            }

            div:nth-child(2) {
                z-index: 1;
                opacity: 1;
                transform: scale(1, 1);
            }
        }
    }
`

const LinksGroup = styled.div`
    position: absolute;
    top: calc(24px + 8px);
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: #ffffff;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.2s;

    a {
        width: 100%;
        padding: 8px 24px;
        border-bottom: 1px solid #ffffff;
        color: #595757;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 23px;
        text-decoration: none;
        cursor: pointer;
        background-color: rgba(20, 153, 146, 0.1);

        :hover {
            text-decoration: underline;
        }
    }

    /* 顯示細項連結列表 */
    ${({ show }) =>
        show &&
        css`
            position: relative;
            top: 8px;
            left: -24px;
            transform: scale(1, 1);
            width: calc(100% + 48px);
            background-color: #ffffff;
            opacity: 1;
            z-index: 999;
        `}

    @media (min-width: 768px) {
        position: absolute;
        top: calc(24px + 19px);
        width: 185px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

        a {
            padding: 8px 0 8px 20px;
            background-color: #ffffff;

            :hover {
                text-decoration: none;
                background-color: rgba(20, 153, 146, 0.1);
            }
        }
    }
`

const Mask = styled.div`
    position: fixed;
    top: 56px;
    left: 0;
    display: none;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.2;

    ${({ show }) =>
        show &&
        css`
            display: block;
        `}

    @media (min-width: 768px) {
        display: none;
    }
`

const data = [
    {
        name: '筆記',
        url: '/notes',
        subLinks: [
            { name: 'Link', url: '/link' },
            { name: 'Static 靜態資源', url: '/static' },
            { name: 'getStaticProps', url: '/getStaticProps' },
            { name: '在請求時拿取資料', url: '/requestTimeGetData' },
            { name: '動態路由', url: '/dynamicRoutes' },
            { name: 'API 路由', url: '/apiRoutes' },
            { name: '部屬 Next.js', url: '/deployment' },
        ],
    },
    {
        name: 'Next.js 教學網',
        url: 'https://nextjs.tw/learn/foundations/about-nextjs',
        subLinks: [{ name: 'Next.js 教學網', url: '', target: '_blank' }],
    },
]

export default function Header() {
    const [dropdownLinksBar, setDropdownLinksBar] = useState(false)
    const [show, setShow] = useState(null)
    const [isHeaderShrink, setIsHeaderShrink] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShow(null)
                setDropdownLinksBar(false)
            }
        }
        const handleScroll = () => {
            // 畫面往下 scroll 超過 100px 時，把 Header 的高度變小
            const scrollPx = getScreenTop()
            if (scrollPx > 110) {
                setIsHeaderShrink(true)
            } else {
                setIsHeaderShrink(false)
            }
        }
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // 手機板時，控制 LinksGroup 展開與縮合
    function handleShow(targetNo) {
        if (targetNo === show || window.innerWidth >= 768) {
            setShow(null)
        } else {
            setShow(targetNo)
        }
    }

    return (
        <HeaderWrapper isHeaderShrink={isHeaderShrink}>
            {/* LOGO */}
            <Link href={'/'}>
                <LogoWrapper isHeaderShrink={isHeaderShrink}>
                    <Image
                        src="/images/next logo.png" // Route of the image file
                        width={46.4} // Desired size with correct aspect ratio
                        height={28} // Desired size with correct aspect ratio
                        sizes="(max-width: 768px) 46.4px, (max-width: 1600px) 55.63px, 79.1px"
                        alt="Logo"
                    />
                </LogoWrapper>
            </Link>

            {/* 漢堡排按鈕 */}
            <Burger
                onClick={() => {
                    setDropdownLinksBar((n) => !n)
                }}
                dropdownLinksBar={dropdownLinksBar}
            >
                <Bar />
                <Bar />
                <Bar />
            </Burger>

            <LinksBar dropdownLinksBar={dropdownLinksBar} isHeaderShrink={isHeaderShrink}>
                {data.length > 0 &&
                    data.map((datum, index) => (
                        <LinksGroupWrapper
                            key={'LinksGroupWrapper' + index}
                            onClick={() => handleShow(index + 1)}
                            active={index + 1 === show}
                        >
                            <div>
                                {datum.name}
                                {/* <PolygonSvg /> */}
                            </div>
                            <LinksGroup show={index + 1 === show}>
                                {datum.subLinks.length > 0 &&
                                    datum.subLinks.map((subLink, subIndex) => (
                                        <Link
                                            key={'LinksGroup' + index + 'Link' + subIndex}
                                            href={datum.url + subLink.url}
                                            target={subLink.target}
                                        >
                                            {subLink.name}
                                        </Link>
                                    ))}
                            </LinksGroup>
                        </LinksGroupWrapper>
                    ))}
            </LinksBar>

            {/* 手機版遮罩 */}
            <Mask show={dropdownLinksBar} />
        </HeaderWrapper>
    )
}
