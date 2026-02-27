"use client";

import Image from "next/image";

import Link from "next/link";
const BlogData = [
  {
    id: "1",
    image: "/oblivion/blog-1.jpg",
    imageDet: "/oblivion/blog-1.jpg",
    tag: "Power Tool",
    postby: "Admin",
    date: "June 2, 2025",
    title: "Functional Design Trends That Blend Style and Comfort",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "2",
    image: "/oblivion/blog-2.jpg",
    imageDet: "/oblivion/blog-2-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 3, 2025",
    title: "Innovative Interior Ideas to Refresh Your Living Space",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "3",
    image: "/oblivion/blog-3.jpg",
    imageDet: "/oblivion/blog-3-det.jpg",
    tag: "Accessories",
    postby: "Admin",
    date: "June 4, 2025",
    title: "Transform Your Home With the Modern Interior Design",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "4",
    image: "/oblivion/blog-4.jpg",
    imageDet: "/oblivion/blog-4-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 7, 2025",
    title: "Elevate Every Corner With Sleek Interior Concepts",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "5",
    image: "/oblivion/blog-5.jpg",
    imageDet: "/oblivion/blog-5-det.jpg",
    tag: "Home Appliance",
    postby: "Admin",
    date: "June 8, 2025",
    title: "The Art of Space: Smart Designs for Elegant Living",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "6",
    image: "/oblivion/blog-6.jpg",
    imageDet: "/blog-6-det.jpg",
    tag: "Home Appliance",
    postby: "Admin",
    date: "June 11, 2025",
    title: "Inspired Spaces: Blending Function and Aesthetic",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "7",
    image: "/oblivion/blog-7.jpg",
    imageDet: "/oblivion/blog-7-det.jpg",
    tag: "Power Tools",
    postby: "Admin",
    date: "June 12, 2025",
    title: "Designing Harmony: Where Architecture Meets Modern...",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "8",
    image: "/oblivion/blog-8.jpg",
    imageDet: "/oblivion/blog-8-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 14, 2025",
    title: "Crafting Beauty in Every Detail of Your Home",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "9",
    image: "/oblivion/blog-9.jpg",
    imageDet: "/oblivion/blog-9-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 17, 2025",
    title: "Timeless Interiors Tailored for Contemporary Homes",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "10",
    image: "/oblivion/blog-10.jpg",
    imageDet: "/oblivion/blog-10-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 18, 2025",
    title: "Luxury Living Redefined Elegant for the Modern Home",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "11",
    image: "/oblivion/blog-11.jpg",
    imageDet: "/oblivion/blog-11-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 18, 2025",
    title: "Modern Architecture That Reflects Your Lifestyle",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "12",
    image: "/oblivion/blog-12.jpg",
    imageDet: "/oblivion/blog-12-det.jpg",
    tag: "Accessories",
    postby: "Admin",
    date: "June 20, 2025",
    title: "Maximize Your Minimalist Space With Smart Solutions",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "13",
    image: "/oblivion/blog-13.jpg",
    imageDet: "/oblivion/blog-13-det.jpg",
    tag: "Electrical & Lighting",
    postby: "Admin",
    date: "June 22, 2025",
    title: "Modern Materials That Elevate Your Home’s..",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
  {
    id: "14",
    image: "/oblivion/blog-14.jpg",
    imageDet: "/oblivion/blog-14-det.jpg",
    tag: "Uncategorized",
    postby: "Admin",
    date: "June 28, 2025",
    title: "Perfectly Redefining Interior Spaces for Modern Lifestyles",
    desc: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home,",
  },
];
export default function Blog() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-7 py-2 GolosText uppercase font-semibold">
              Our latest Blogs
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl mb-5 w-full lg:w-[80%]">
              Take A look At{" "}
              <span className="text-(--prim)"> Our Latest Blog </span> &
              Articles.
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-20">
          <div className="w-full lg:w-1/2">
            {BlogData.slice(0, 1).map((blog, index) => (
              <div key={index} className="group cursor-pointer">
                <Link href={`/UI-Components/Blogs/${blog.id}`}>
                  <div className="blog-image relative rounded-2xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={500}
                      height={500}
                      className="w-full h-full rounded-2xl group-hover:scale-110 transition-all duration-300"
                    />
                    <span className="absolute top-5 left-5 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">
                      {blog.tag}
                    </span>
                  </div>
                  <div className="blog-info mt-3">
                    <p className="GolosText text-gray-400">
                      by{" "}
                      <span className="text-(--prim) font-semibold">
                        {blog.postby}
                      </span>
                    </p>
                    <h2 className="text-4xl md:text-5xl CalSans my-5 hover:text-(--prim) transition-all duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-500 GolosText">{blog.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2">
            {BlogData.slice(0, 3).map((blog, index) => (
              <Link key={index} href={`/UI-Components/Blogs/${blog.id}`}>
                <div className="flex flex-col md:flex-row group cursor-pointer mb-5 gap-4">
                  <div className="w-full lg:w-1/2 blog-image relative rounded-2xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-all duration-300"
                    />
                    <span className="absolute top-3 left-2 bg-(--prim) px-4 py-1 font-semibold rounded-full text-white GolosText">
                      {blog.tag}
                    </span>
                  </div>
                  <div className="w-full lg:w-1/2 blog-info mt-3">
                    <p className="GolosText text-gray-400">
                      <span>
                        {blog.date} <span className="text-(--prim)">•</span>
                      </span>{" "}
                      by{" "}
                      <span className="text-(--prim) font-semibold">
                        {blog.postby}
                      </span>
                    </p>
                    <h2 className="text-3xl md:text-2xl CalSans my-3 hover:text-(--prim) transition-all duration-300">
                      {blog.title}
                    </h2>
                    <p className="text-gray-500 GolosText text-[15px]">
                      {blog.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
