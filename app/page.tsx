import Image from "next/image";
import {allBlogs} from "../.contentlayer/generated"
import HomeCoverSection from "./components/home/home-cover-section";

import FeaturedPosts from "./components/home/featured-posts";
import RecentPosts from "./components/home/recent-posts";
export default function Home() {
  // console.log(allBlogs)
  return (
    
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs = {allBlogs}/>
      <FeaturedPosts blogs = {allBlogs}/>
      <RecentPosts blogs = {allBlogs}/>
    </main>
  );
}
