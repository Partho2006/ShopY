// components/BlogSection.jsx
import Link from 'next/link';
import { blogs } from '@/constants/blogs';
import Image from 'next/image';

const BlogSection = () => {
    return (
        <section className="py-12 px-4 md:px-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">
                Latest From Our Blog
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.slug}
                        className="bg-violet-300 h-full rounded-lg shadow hover:shadow-lg transition p-4">
                        <div className="relative w-full overflow-hidden rounded-md">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                fill="true"
                                className="object-cover rounded-md"
                            />
                        </div>
                        <p className="text-sm text-gray-500">{blog.date}</p>
                        <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 font-semibold">{blog.desc}</p>
                        <Link
                            className="text-blue-500 hover:underline font-bold"
                            href={`/blog/${blog.slug}`}>
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
