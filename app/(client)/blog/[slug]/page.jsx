import { blogs } from '@/constants/blogs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const BlogPage = ({ params }) => {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="rounded-lg mb-6"/>
      <div className="whitespace-pre-wrap text-base leading-7 text-gray-800">
        {blog.content}
      </div>
      <Link href="/blog" className='font-semibold text-blue-500 hover:underline'>Go Back</Link>
    </div>
  );
};

export default BlogPage;
