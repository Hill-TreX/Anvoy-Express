import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { motion } from 'motion/react';

export default function CTABanner() {
    return (
        <section className="w-full px-6 md:px-10 py-16 md:py-28">
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1536px] mx-auto rounded-3xl md:rounded-[3rem] overflow-hidden relative p-8 md:p-16 lg:p-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 gg-gradient"
            >
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white md:text-[rgba(30,50,90)] tracking-tight leading-tight max-w-xl">
                        Ship smarter with Anvoy Express
                    </h2>
                    <p className="text-base md:text-lg text-white/60 md:text-[rgba(30,50,90)]/60 font-normal max-w-md leading-relaxed">
                        From same-day courier to worldwide express delivery, we move your parcels with speed, reliability, and full visibility.
                    </p>
                </div>

                <div className="flex w-full flex-col md:flex-row gap-3">
                    <button className="flex w-full md:w-auto items-center bg-white text-[rgba(30,50,90,0.95)] rounded-full px-6 py-3 gap-2 font-normal text-sm hover:bg-white/90 transition-colors justify-center">
                        Get a Quote <HugeiconsIcon icon={ArrowUpRight01Icon} className="w-4 h-4" />
                    </button>
                    <button className="flex w-full md:w-auto items-center border border-white/30 text-white rounded-full px-6 py-3 gap-2 font-normal text-sm hover:bg-white/10 transition-colors justify-center">
                        Contact Sales <HugeiconsIcon icon={ArrowUpRight01Icon} className="w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
