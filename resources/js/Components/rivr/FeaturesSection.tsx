import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon, BarChartIcon, GlobeIcon, LockIcon, RocketIcon } from '@hugeicons/core-free-icons';
import { motion } from 'motion/react';
import type { IconSvgElement } from '@hugeicons/react';

type Card = { label?: string; title: string; description?: string; action?: string; badge?: string; icon?: IconSvgElement; wide?: boolean };

const cards: Card[] = [
    { label: 'NEXT POSSIBLE BUSINESS DAY', title: 'Fast delivery, right when you need it', description: 'Get your important shipments moving quickly with reliable express delivery designed to reach your customers and business partners at the earliest possible opportunity.', icon: RocketIcon },
    { label: 'FLEXIBLE IMPORT & EXPORT', title: 'Shipping made simple across borders', description: 'Send and receive goods with flexible import and export options designed to make international shipping easier, smoother, and more convenient for your business.', action: 'Explore', icon: BarChartIcon },
    { label: 'TAILORED BUSINESS SOLUTIONS', title: 'Delivery solutions built around your business', description: 'Every business ships differently. Get flexible delivery solutions designed around your unique needs, helping you manage shipments efficiently as your business grows.', action: 'Discover', icon: ArrowUpRight01Icon },
    { label: 'OPTIONAL SERVICES', title: 'More ways to make shipping easier', description: 'Choose from a wide range of optional services that give you greater flexibility, convenience, and control throughout your delivery journey.', icon: LockIcon },
    { label: 'BUSINESS EXPRESS DELIVERY', title: 'Your shipments. Our commitment.', description: 'From urgent business deliveries to international shipments, we help you move what matters with dependable express delivery and flexible solutions built around your needs.', action: 'Learn More', icon: GlobeIcon, wide: true },
];

function ActionButton({ label }: { label: string }) {
    return <button className="group flex self-start items-center gap-2 rounded-full bg-[#f0f0f0] py-1.5 pl-1.5 pr-4 transition-colors hover:bg-gray-100"><span className="flex items-center justify-center rounded-full bg-[rgba(30,50,90,0.08)] p-1"><HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4 text-[rgba(30,50,90,0.9)]" /></span><span className="text-[13px] font-normal text-[rgba(30,50,90,0.9)] md:text-sm">{label}</span></button>;
}

export default function FeaturesSection() {
    return (
        <section className="mx-auto w-full max-w-[1536px] px-6 py-16 md:px-10 md:py-24">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                <div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-3xl lg:text-4xl">Document and Parcel Shipping</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 max-w-lg text-sm font-normal text-[rgba(30,50,90,0.6)] md:text-base">Learn about Anvoy Express – the undisputed global leader in international express shipping.</motion.p>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 rounded-full bg-[rgba(30,50,90,0.9)] px-5 py-2 text-sm font-normal text-white transition-colors hover:bg-[rgba(30,50,90,1)]">Explore Anvoy Express <HugeiconsIcon icon={ArrowUpRight01Icon} className="h-4 w-4" /></motion.button>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <motion.article key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative flex min-h-[260px] flex-col gap-3 overflow-hidden rounded-2xl bg-white p-5 md:gap-4 md:rounded-3xl md:p-7 lg:p-8 ${card.wide ? 'md:col-span-2' : ''}`}>
                            <div className="flex items-center justify-between">
                                {card.label && <p className="text-[10px] font-normal uppercase tracking-widest text-[rgba(30,50,90,0.4)] md:text-[11px]">{card.label}</p>}
                                {Icon && <HugeiconsIcon icon={Icon} className="h-5 w-5 text-[rgba(30,50,90,0.35)]" />}
                            </div>
                            {card.badge && <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(30,50,90,0.1)] bg-[rgba(30,50,90,0.05)] text-sm font-normal text-[rgba(30,50,90,0.8)] md:right-6 md:top-6 md:h-10 md:w-10">{card.badge}</span>}
                            <h3 className="max-w-xl text-lg font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-xl lg:text-2xl">{card.title}</h3>
                            {card.description && <p className="max-w-2xl text-sm font-normal leading-relaxed text-[rgba(30,50,90,0.6)] md:text-base">{card.description}</p>}
                            <div className="mt-auto">{card.action ? <ActionButton label={card.action} /> : <ActionButton label="Explore" />}</div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
