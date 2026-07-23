import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { Home01Icon as HomeIcon, Compass01Icon as CompassIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";
import { Link } from "@inertiajs/react";

export function NotFound() {
	return (
		<div className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-[#f0f0f0]">
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="z-10 w-full max-w-[90%] sm:max-w-md md:max-w-lg"
			>
				<Empty className="border-none bg-white/50 backdrop-blur-xl shadow-2xl rounded-[3rem] p-8 sm:p-12">
					<EmptyHeader>
						<h1 
							style={{ 
								fontSize: 'clamp(8rem, 20vw, 15rem)', 
								fontWeight: 900, 
								lineHeight: 1, 
								letterSpacing: '-0.05em', 
								color: '#1E325A',
								margin: 0
							}}
						>
							404
						</h1>
						<EmptyDescription className="text-nowrap text-[#1E325A]/60 text-lg">
							The page you're looking for might have been <br />
							moved or doesn't exist.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent className="mt-4">
						<div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-center">
							<Link href="/" className="w-full sm:w-auto">
								<Button className="rounded-full bg-[#1E325A] hover:bg-[#1E325A]/90 px-8 py-3.5 h-auto text-base text-white w-full sm:w-auto min-h-[44px]">
									<HugeiconsIcon icon={HomeIcon} className="size-5 mr-2 text-white shrink-0" />
									<span className="truncate">Go Home</span>
								</Button>
							</Link>

							<Link href="/" className="w-full sm:w-auto">
								<Button variant="outline" className="rounded-full border-[#1E325A]/40 bg-transparent hover:bg-[#1E325A]/5 px-8 py-3.5 h-auto text-base text-[#1E325A] w-full sm:w-auto min-h-[44px]">
									<HugeiconsIcon icon={CompassIcon} className="size-5 mr-2 text-[#1E325A] shrink-0" />
									<span className="truncate">Explore</span>
								</Button>
							</Link>
						</div>
					</EmptyContent>
				</Empty>
			</motion.div>
		</div>
	);
}
