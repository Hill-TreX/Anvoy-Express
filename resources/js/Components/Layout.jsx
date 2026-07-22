import { Link, usePage } from '@inertiajs/react';
import CookiePanel from '@/Components/rivr/CookieBanner';

export default function Layout({ children }) {
    const { url } = usePage();

    const navLinks = [
        { href: '/', label: 'Home', path: '/' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center space-x-8">
                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">L</span>
                                </div>
                                <span className="font-semibold text-gray-800 hidden sm:inline">
                                    Laravel React
                                </span>
                            </Link>

                            {/* Nav links */}
                            <div className="hidden sm:flex sm:space-x-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.href}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                            url === link.path
                                                ? 'text-red-600 bg-red-50'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* External link */}
                        <div className="flex items-center">
                            <a
                                href="https://inertiajs.com"
                                target="_blank"
                                rel="noopener"
                                className="text-sm text-gray-500 hover:text-gray-800"
                            >
                                Inertia.js Docs →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile nav */}
                <div className="sm:hidden flex justify-around pb-2 px-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.href}
                            className={`px-3 py-2 rounded-md text-sm font-medium ${
                                url === link.path
                                    ? 'text-red-600 bg-red-50'
                                    : 'text-gray-600'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Page content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="border-t border-gray-200 bg-white mt-16">
                <div className="max-w-7xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
                    Built with Laravel + Inertia.js + React + Vite + Tailwind CSS
                </div>
            </footer>

            <CookiePanel />
        </div>
    );
}
