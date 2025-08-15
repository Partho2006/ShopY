import BlogSection from '@/components/Blogsection';
import React from 'react';
import { blogs } from '@/constants/blogs';

export default function Home() {
  return (
    <main>
      {/* ... other sections */}
      <BlogSection />
    </main>
  );
}
