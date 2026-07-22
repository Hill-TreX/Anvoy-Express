import { motion } from 'motion/react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
    Clock01Icon,
    GlobeIcon,
    Rocket01Icon,
    ViewIcon,
} from '@hugeicons/core-free-icons';

const stats = [
    { value: '24/7', label: 'Shipment Tracking', icon: Clock01Icon },
    { value: 'NEXT-DAY', label: 'Express Delivery Options', icon: Rocket01Icon },
    { value: 'GLOBAL', label: 'Import & Export Services', icon: GlobeIcon },
    { value: '100%', label: 'Shipment Visibility', icon: ViewIcon },
];

export default function StatsRow() {
    return (
        <section className="mx-auto w-full max-w-[1536px] px-6 py-12 md:px-10 md:py-16">
            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-0">
                {stats.map(({ value, label, icon: Icon }, index) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`px-4 first:pl-0 md:px-8 ${index < 3 ? 'md:border-r md:border-[rgba(30,50,90,0.1)]' : ''}`}>
                        <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(30,50,90,0.06)] text-[rgba(30,50,90,0.85)] md:h-12 md:w-12">
                            <HugeiconsIcon icon={Icon} className="h-5 w-5 md:h-6 md:w-6" />
                        </span>
                        <p className="text-4xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-5xl lg:text-6xl">{value}</p>
                        <p className="mt-2 text-[11px] font-normal uppercase tracking-wider text-[rgba(30,50,90,0.5)] md:text-sm">{label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
