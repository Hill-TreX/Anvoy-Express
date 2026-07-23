import { ArrowRight03Icon } from '@hugeicons/core-free-icons';
import { ArrowUpRight01Icon, ChevronRightIcon, SparklesIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { motion } from 'motion/react';
import type { IconSvgElement } from '@hugeicons/react';
import StatsRow from '@/Components/rivr/StatsRow';
import FeaturesSection from '@/Components/rivr/FeaturesSection';
import FeatureCarousel from '@/components/ui/feature-carousel';
import CTABanner from '@/Components/rivr/CTABanner';
import Footer from '@/Components/rivr/Footer';
import CookiePanel from '@/Components/rivr/CookieBanner';

const videoUrl = '/videos/anvoy-hero.webm';

function Navbar() {
    const links = [
        { label: 'Services', hasDropdown: true },
        { label: 'Shipping', hasDropdown: true },
        { label: 'Business Solutions' },
        { label: 'Support', hasDropdown: true },
    ];

    return (
        <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 md:px-10">
            <div className="hidden flex-1 md:flex items-center">
                <img src="/images/logo.png" alt="Anvoy" className="h-20 md:h-24 w-auto" />
            </div>
            <ul className="hidden items-center gap-8 text-sm font-normal text-[rgb(45,45,45)] md:flex">
                {links.map(({ label, hasDropdown }) => (
                    <li key={label} className="group flex cursor-pointer items-center gap-1 transition-opacity hover:opacity-70">
                        {label}
                        {hasDropdown && <HugeiconsIcon icon={ChevronRightIcon} className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
                    </li>
                ))}
            </ul>
            <div className="md:hidden">
                <img src="/images/logo.png" alt="Anvoy" className="h-14 w-auto" />
            </div>
            <div className="flex flex-1 justify-end">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group flex items-center gap-2 rounded-full bg-[rgba(30,50,90,0.8)] py-1.5 pl-2 pr-4 text-white transition-colors hover:bg-[rgba(30,50,90,1)] md:gap-3 md:py-2 md:pr-6">
                    <span className="flex items-center justify-center rounded-full bg-white/20 p-1 md:p-1.5"><HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4 text-white md:h-5 md:w-5" /></span>
                    <span className="text-xs font-normal md:text-sm">Track Shipment</span>
                </motion.button>
            </div>
        </nav>
    );
}

function HeroBadge() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-2 backdrop-blur-md">
            <HugeiconsIcon icon={SparklesIcon} className="h-4 w-4 text-[rgba(30,50,90,0.8)]" />
            <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">24/7 Shipment Support</span>
        </motion.div>
    );
}

function BottomLeftCard() {
    return (
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute bottom-28 right-4 flex min-w-[140px] w-fit flex-col gap-2 rounded-[1.2rem] bg-white/30 p-3 backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:min-w-[150px] md:gap-3 md:rounded-[1.5rem] md:p-4 lg:bottom-10 lg:left-10 lg:min-w-[180px] lg:gap-3 lg:rounded-[2.2rem] lg:p-5">
            <div>
                <p className="text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.9)] md:text-3xl">24/7</p>
                <p className="text-[10px] font-normal uppercase tracking-wider text-[rgba(30,50,90,0.6)] md:text-[12px]">Shipment Support</p>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group flex self-start items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-5 transition-colors hover:bg-white/90">
                <span className="flex items-center justify-center rounded-full bg-[rgba(30,50,90,0.1)] p-1"><HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4 text-[rgba(30,50,90,0.9)]" /></span>
                <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Ship Now</span>
            </motion.button>
        </motion.div>
    );
}

function BottomRightCorner() {
    return (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[1.5rem] bg-[#f0f0f0] p-3 pb-3 pl-8 pt-5 sm:gap-4 sm:rounded-tl-[2rem] sm:p-4 sm:pl-10 sm:pt-6 md:gap-6 md:rounded-tl-[3.5rem] md:p-6 md:pl-14 md:pt-8">
            <div className="pointer-events-none absolute -top-[1.5rem] right-0 h-[1.5rem] w-[1.5rem] sm:-top-[2rem] sm:h-[2rem] sm:w-[2rem] md:-top-[3.5rem] md:h-[3.5rem] md:w-[3.5rem]"><svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" /></svg></div>
            <div className="pointer-events-none absolute bottom-0 -left-[1.5rem] h-[1.5rem] w-[1.5rem] sm:-left-[2rem] sm:h-[2rem] sm:w-[2rem] md:-left-[3.5rem] md:h-[3.5rem] md:w-[3.5rem]"><svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" /></svg></div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(30,50,90,0.1)] bg-[rgba(30,50,90,0.05)] md:h-14 md:w-14"><HugeiconsIcon icon={ArrowUpRight01Icon} className="text-[rgba(30,50,90,0.8)]" /></span>
            <div>
                <p className="text-[16px] font-normal text-[rgba(30,50,90,0.95)] md:text-[20px]">Shipping Resources</p>
                <a href="#library" className="flex cursor-pointer items-center gap-1 text-[rgba(30,50,90,0.6)] transition-colors hover:text-[rgba(30,50,90,0.8)]"><span className="text-[12px] font-normal md:text-[15px]">Guides & Support</span><HugeiconsIcon icon={ChevronRightIcon} className="h-3 w-3 md:h-4 md:w-4" /></a>
            </div>
        </motion.div>
    );
}

function Hero() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#f0f0f0] p-3 md:p-5">
            <section className="group relative flex h-full w-full max-w-[1536px] flex-col items-center overflow-hidden rounded-[1.5rem] bg-white/10 shadow-none md:rounded-[3rem]">
                <video autoPlay muted loop playsInline className="absolute inset-0 z-0 h-full w-full object-cover object-[65%] lg:object-center" src={videoUrl} />
                <div className="relative z-10 flex h-full w-full flex-col items-center">
                    <Navbar />
                    <div className="flex w-full max-w-4xl flex-col items-center px-6 pt-8 text-center">
                        <HeroBadge />
                        <motion.h1 initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-4 text-7xl font-medium leading-[1.05] tracking-tight text-[#1E325A] sm:text-8xl md:text-9xl lg:text-[10rem]">Fast, reliable global delivery</motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-3xl text-xl font-normal leading-relaxed text-[#1E325A]/80 sm:text-2xl md:text-3xl">Send documents and parcels worldwide with express options, flexible import/export services, and full shipment visibility.</motion.p>
                    </div>
                    <BottomLeftCard />
                    <BottomRightCorner />
                </div>
            </section>
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen bg-[#f0f0f0]">
            <Hero />
            <StatsRow />
            <FeaturesSection />
                <div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-3xl lg:text-4xl text-center mb-4">Cargo Shipping</motion.h2>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[rgba(30,50,90,0.1)] bg-white/60 px-4 py-2 backdrop-blur-md">
                        <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)] uppercase tracking-wider">Business Only</span>
                    </motion.div>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-2 text-center max-w-lg mx-auto text-sm font-normal text-[rgba(30,50,90,0.6)] md:text-base">Discover shipping and logistics service options from Anvoy Global Forwarding.</motion.p>
                </div>
                <div className="mt-10">
                    <FeatureCarousel />
                </div>
            <CTABanner />
            <Footer />
            <CookiePanel />
        </main>
    );
}
