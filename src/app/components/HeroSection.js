/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-100 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
          Discover Delicious Recipes & Master the Art of Cooking
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore curated recipes, helpful tips, and video tutorials to elevate your culinary skills. Whether you're a beginner or seasoned chef, this is your kitchen companion.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#recipes" className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition">
            Explore Recipes
          </Link>
          <Link href="#video" className="bg-white text-orange-600 border border-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
            Watch Video
          </Link>
          <Link href="#submit" className="bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition">
            Submit Your Recipe
          </Link>
        </div>
      </motion.div>
    </section>
  );
}