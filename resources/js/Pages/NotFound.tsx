import { NotFound } from "@/components/ui/not-found-2";
import { Head } from "@inertiajs/react";
import Footer from '@/Components/rivr/Footer';

export default function NotFoundPage() {
    return (
        <main className="min-h-screen bg-[#f0f0f0]">
            <Head title="404 - Page Not Found" />
            <NotFound />
            <Footer />
        </main>
    );
}
