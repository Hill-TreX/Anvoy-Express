import { useState } from 'react';
import { motion } from 'motion/react';
import { MoveRight } from 'lucide-react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { Link } from '@inertiajs/react';

export default function Login() {
  const [email, setEmail] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="w-full px-6 py-6 md:px-10">
          <Link href="/" className="inline-flex items-center">
            <img src="/images/logo.png" alt="Anvoy" className="h-14 w-auto md:h-16" />
          </Link>
        </header>

        <main className="flex flex-1 items-center justify-center px-4 py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-3xl bg-white p-8 shadow-2xl"
            >
              <motion.div variants={itemVariants} className="mb-8 text-center">
                <h1 className="text-3xl font-light text-[#1E325A]">Welcome back</h1>
                <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your Email"
                    className="w-full rounded-full border border-gray-300 bg-gray-100 px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-[#1E325A] focus:outline-none"
                  />
                  <motion.button
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#1E325A] p-3 text-white"
                  >
                    <MoveRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-6 flex items-center">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-gray-100 px-6 py-4 text-gray-900 transition-colors hover:bg-gray-200"
                >
                  <img src="/images/google.svg" alt="Google" className="h-5 w-5" />
                  <span>Continue with Google</span>
                </motion.button>

                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex w-full items-center justify-center gap-3 rounded-full border border-gray-300 bg-gray-100 px-6 py-4 text-gray-900 transition-colors hover:bg-gray-200"
                >
                  <img src="/images/microsoft.svg" alt="Microsoft" className="h-5 w-5" />
                  <span>Continue with Microsoft</span>
                </motion.button>

              </motion.div>

              <motion.div variants={itemVariants} className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="#"
                    className="text-[#1E325A] underline transition-colors hover:text-[#1E325A]/80"
                  >
                    Sign up
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
