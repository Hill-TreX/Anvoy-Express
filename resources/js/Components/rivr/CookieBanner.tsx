import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Prefs = {
    necessary: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
};

type CookiePanelProps = {
    title?: string;
    message?: string;
    acceptText?: string;
    customizeText?: string;
    privacyHref?: string;
    termsHref?: string;
    className?: string;
};

const icons = {
    cookie: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
            <circle cx="12" cy="12" r="10" />
            <circle cx="8" cy="9" r="0.5" fill="currentColor" />
            <circle cx="14" cy="8" r="0.5" fill="currentColor" />
            <circle cx="10" cy="13" r="0.5" fill="currentColor" />
            <circle cx="16" cy="12" r="0.5" fill="currentColor" />
        </svg>
    ),
    check: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    chevronDown: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    ),
    chevronUp: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
            <polyline points="18 15 12 9 6 15" />
        </svg>
    ),
    x: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
};

function cn(...classes: (string | boolean | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

function PrefRow({
    title,
    desc,
    field,
    locked,
    checked,
    onToggle,
}: {
    title: string;
    desc: string;
    field: keyof Prefs;
    locked?: boolean;
    checked: boolean;
    onToggle: (field: keyof Prefs) => void;
}) {
    return (
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-2">
            <div className="flex items-start gap-2">
                <button
                    type="button"
                    disabled={locked}
                    onClick={() => !locked && onToggle(field)}
                    className={cn(
                        'mt-0.5 inline-flex size-5 cursor-pointer items-center justify-center rounded border',
                        locked
                            ? 'cursor-not-allowed border-white/10 bg-white/[0.05] text-white/40'
                            : 'cursor-pointer border-white/15 bg-white/[0.05] hover:bg-white/[0.08]'
                    )}
                    aria-pressed={checked}
                    aria-label={`${title} cookie preference`}
                >
                    {checked && icons.check}
                </button>

                <div className="flex-1">
                    <div className="text-xs font-medium text-white">
                        {title}{' '}
                        {locked && <span className="text-[10px] text-white/45">(required)</span>}
                    </div>
                    <p className="mt-0.5 text-[10px] text-white/50">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default function CookiePanel({
    title = 'This site uses cookies',
    message = 'We use cookies to enhance your experience.',
    acceptText = 'Accept all',
    customizeText = 'Customize',
    privacyHref = '/privacy',
    termsHref = '/terms',
    className,
}: CookiePanelProps = {}) {
    const [visible, setVisible] = useState(false);
    const [render, setRender] = useState(false);
    const [showPrefs, setShowPrefs] = useState(false);
    const [prefs, setPrefs] = useState<Prefs>({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false,
    });
    const prefsRef = useRef<HTMLDivElement | null>(null);
    const [prefsHeight, setPrefsHeight] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem('cookie-consent');
        const storedPrefs = localStorage.getItem('cookie-preferences');

        if (!stored) {
            const renderTimer = window.setTimeout(() => {
                setRender(true);
                requestAnimationFrame(() => setVisible(true));
            }, 0);

            if (storedPrefs) {
                try {
                    const parsed = JSON.parse(storedPrefs) as Prefs;
                    const prefsTimer = window.setTimeout(() => {
                        setPrefs({ ...parsed, necessary: true });
                    }, 0);

                    return () => {
                        window.clearTimeout(renderTimer);
                        window.clearTimeout(prefsTimer);
                    };
                } catch {
                    return () => {
                        window.clearTimeout(renderTimer);
                    };
                }
            }

            return () => {
                window.clearTimeout(renderTimer);
            };
        }

        if (!storedPrefs) {
            return;
        }

        try {
            const parsed = JSON.parse(storedPrefs) as Prefs;
            const prefsTimer = window.setTimeout(() => {
                setPrefs({ ...parsed, necessary: true });
            }, 0);

            return () => {
                window.clearTimeout(prefsTimer);
            };
        } catch {
            return;
        }
    }, []);

    useEffect(() => {
        if (showPrefs && prefsRef.current) {
            setPrefsHeight(prefsRef.current.scrollHeight);
            return;
        }

        setPrefsHeight(0);
    }, [showPrefs, prefs]);

    const closeWithExit = (consent?: 'true' | 'false') => {
        if (consent) {
            localStorage.setItem('cookie-consent', consent);
        }

        setVisible(false);
        window.setTimeout(() => setRender(false), 300);
    };

    const savePreferences = () => {
        localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
        localStorage.setItem('cookie-consent', 'true');
        setShowPrefs(false);
        setVisible(false);
        window.setTimeout(() => setRender(false), 300);
    };

    if (!render) {
        return null;
    }

    const togglePref = (field: keyof Prefs) => {
        setPrefs((current) => ({ ...current, [field]: !current[field] }));
    };

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            className={cn(
                'fixed bottom-4 right-4 z-50 w-[360px] max-w-[90vw] md:bottom-6 md:right-6'
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(
                    'relative flex flex-col gap-3 rounded-xl border border-white/10 bg-[rgba(30,50,90,0.95)] p-4 text-white shadow-xl',
                    className
                )}
            >
                <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
                        {icons.cookie}
                    </span>
                    <h2 className="text-sm font-semibold leading-5 text-white">{title}</h2>
                    <button
                        type="button"
                        onClick={() => closeWithExit()}
                        className="ml-auto inline-flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-white/5"
                        aria-label="Close cookie banner"
                    >
                        <span className="text-white/55">{icons.x}</span>
                    </button>
                </div>

                <p className="text-xs leading-5 text-white/55">
                    {message} See our{' '}
                    <a href={privacyHref} className="cursor-pointer underline underline-offset-4 hover:text-white">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href={termsHref} className="cursor-pointer underline underline-offset-4 hover:text-white">
                        Terms & Conditions
                    </a>
                    .
                </p>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setShowPrefs((current) => !current)}
                        className="flex cursor-pointer items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 transition-colors hover:bg-white/[0.07]"
                        aria-expanded={showPrefs}
                        aria-controls="cookie-preferences-inline"
                    >
                        {customizeText}
                        {showPrefs ? icons.chevronUp : icons.chevronDown}
                    </button>

                    <button
                        type="button"
                        onClick={() => closeWithExit('true')}
                        className="rounded-md bg-[rgba(30,50,90,0.8)] px-3 py-1.5 text-xs text-white transition-colors hover:bg-[rgba(30,50,90,1)]"
                    >
                        {acceptText}
                    </button>
                </div>

                <div
                    id="cookie-preferences-inline"
                    ref={prefsRef}
                    style={{ height: prefsHeight ? `${prefsHeight}px` : 0 }}
                    className="overflow-hidden transition-[height] duration-300 ease-out will-change-[height]"
                >
                    {showPrefs && (
                        <div className="mt-2 flex flex-col gap-2">
                            <PrefRow
                                title="Strictly necessary"
                                desc="Required for site functionality."
                                field="necessary"
                                locked
                                checked={prefs.necessary}
                                onToggle={togglePref}
                            />
                            <PrefRow
                                title="Functional"
                                desc="Remembers your preferences."
                                field="functional"
                                checked={prefs.functional}
                                onToggle={togglePref}
                            />
                            <PrefRow
                                title="Analytics"
                                desc="Helps us improve the site."
                                field="analytics"
                                checked={prefs.analytics}
                                onToggle={togglePref}
                            />
                            <PrefRow
                                title="Marketing"
                                desc="Personalized ads."
                                field="marketing"
                                checked={prefs.marketing}
                                onToggle={togglePref}
                            />

                            <div className="mt-1 flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowPrefs(false)}
                                    className="cursor-pointer rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/65 hover:bg-white/[0.07]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={savePreferences}
                                    className="cursor-pointer rounded-md bg-[rgba(30,50,90,0.8)] px-2.5 py-1 text-xs text-white hover:bg-[rgba(30,50,90,1)]"
                                >
                                    Save preferences
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
