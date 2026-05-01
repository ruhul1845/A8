'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    ['/', 'Home'],
    ['/courses', 'Courses'],
    ['/my-profile', 'My Profile'],
];

export default function Navbar() {
    const path = usePathname();

    return (
        <div className="sticky top-0 z-50 glass border-b border-white/70">
            <div className="navbar max-w-7xl mx-auto px-4">

                {/* Left - Logo + Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            aria-label="Open menu"
                        >
                            ☰
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links.map(([href, label]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={path === href ? 'font-bold text-primary' : ''}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/" className="text-2xl font-black gradient-text">
                        🎓 SkillSphere
                    </Link>
                </div>

                {/* Center - Desktop Nav */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links.map(([href, label]) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={path === href ? 'font-bold text-primary' : ''}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right - Static Buttons */}
                <div className="navbar-end gap-2">
                    <Link href="/login" className="btn btn-ghost btn-sm rounded-full">
                        Login
                    </Link>

                </div>

            </div>
        </div>
    );
}