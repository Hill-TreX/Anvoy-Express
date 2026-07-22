import { motion, useReducedMotion } from 'motion/react';

const icons = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 size-4">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 size-4">
      <path d="M12 2.163c3.598 0 4.01.012 5.414.34 3.06.713 5.352 2.866 6.065 5.926.275 1.405.34 1.816.34 5.414 0 3.598-.012 4.01-.34 5.414-.713 3.06-2.866 5.352-5.926 6.065-1.405.275-1.816.34-5.414.34-3.598 0-4.01-.012-5.414-.34-3.06-.713-5.352-2.866-6.065-5.926-.275-1.405-.34-1.816-.34-5.414 0-3.598.012-4.01.34-5.414.713-3.06 2.866-5.352 5.926-6.065C7.99 2.175 8.402 2.163 12 2.163zm0-2.163C8.521 0 8.053.012 6.658.345 3.094.981.381 3.679.26 7.19.012 8.585 0 9.053 0 12.523s.012 3.938.26 5.333c.121 3.511 2.835 5.209 6.398 5.845C8.053 23.988 8.521 24 12 24s3.947-.012 5.342-.345c3.511-.636 6.277-2.334 6.398-5.845.248-1.395.26-1.863.26-5.333s-.012-3.938-.26-5.333c-.121-3.511-2.835-5.209-6.398-5.845C15.947.012 15.479 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 size-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 size-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

const columns = [
    {
        title: 'Services',
        links: [
            { title: 'Express Delivery', href: '#services' },
            { title: 'International Shipping', href: '#shipping' },
            { title: 'Import & Export', href: '#shipping' },
            { title: 'Optional Services', href: '#features' },
        ]
    },
    {
        title: 'Support',
        links: [
            { title: 'Help Center', href: '#help' },
            { title: 'Shipping FAQs', href: '#faqs' },
            { title: 'Contact Us', href: '#contact' },
        ]
    },
    {
        title: 'Company',
        hideOnMobile: true,
        links: [
            { title: 'About Anvoy', href: '#about' },
            { title: 'Newsroom', href: '#news' },
            { title: 'Careers', href: '#careers' },
            { title: 'Legal', href: '/terms' },
        ]
    },
    {
        title: 'Social',
        hideOnMobile: true,
        links: [
            { title: 'Facebook', href: '#', icon: icons.facebook },
            { title: 'Instagram', href: '#', icon: icons.instagram },
            { title: 'YouTube', href: '#', icon: icons.youtube },
            { title: 'LinkedIn', href: '#', icon: icons.linkedin },
        ]
    },
];

type FooterSection = {
    title: string;
    links: FooterLink[];
    hideOnMobile?: boolean;
};

type FooterLink = {
    title: string;
    href: string;
    icon?: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string; delay?: number; children: React.ReactNode }) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Footer() {
    return (
        <footer className="relative flex w-full flex-col items-center justify-center rounded-t-[40px] border-t border-white/10 bg-[rgba(30,50,90,0.95)] px-6 py-3 md:py-8">
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-sm" />

            <div className="grid w-full gap-6 md:gap-8 xl:grid-cols-3 xl:gap-8">
                <AnimatedContainer className="space-y-1 md:space-y-4 md:mb-6">
                    <img src="/images/logo.png" alt="Anvoy" className="h-14 w-auto" />
                    <p className="text-sm text-white/60 font-normal max-w-xs leading-relaxed">
                        Fast, reliable global delivery. Express shipping, import/export services, and full shipment visibility for documents and parcels worldwide.
                    </p>
                    <p className="text-sm text-white/50 font-normal md:block hidden">
                        © {new Date().getFullYear()} Anvoy. All rights reserved.
                    </p>
                </AnimatedContainer>

                <div className="mt-2 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 md:gap-8 xl:col-span-2">
                    {columns.map((section, index) => (
                        <AnimatedContainer key={section.title} delay={0.1 + index * 0.1}>
                            <div className={`${section.hideOnMobile ? 'hidden md:block' : ''}`}>
                                <h3 className="text-sm font-medium text-white">
                                    {section.title}
                                </h3>
                                <ul className="mt-2 space-y-1.5 text-sm text-white/60 md:mt-4 md:space-y-3">
                                    {(section.links as FooterLink[]).map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="inline-flex items-center transition-colors duration-300 hover:text-white/90"
                                            >
                                                {link.icon && <span className="mr-2 size-4">{link.icon}</span>}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>

            <p className="text-center text-sm text-white/50 md:hidden">
                © {new Date().getFullYear()} Anvoy. All rights reserved.
            </p>
        </footer>
    );
}
