import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  link: string;
  darkModeTitle?: boolean; // Added optional prop for dark mode title
};

const BlogCard = ({ id, imgUrl, title, link, darkModeTitle }: BlogCardProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to detect dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addListener(handler);

    return () => darkModeMediaQuery.removeListener(handler);
  }, []);

  return (
    <div className={`position-relative bg-silver rounded-4 card ${isDarkMode ? 'dark-mode' : ''}`} data-aos={id === 1 ? "fade-right" : id === 2 ? "fade-down" : "fade-left"}>
      <Image src={imgUrl} width={368} height={286} alt={title} className="h-auto w-auto"/>
      <div className={`px-3 py-3 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-white position-absolute top-100 start-50 translate-middle rounded-3 ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1 className={`fs-4 ${darkModeTitle ? 'blog-title' : ''}`}>{title}</h1>
        <Link
          href={link}
          className={`link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover mt-3 px-3 py-3 ${isDarkMode ? 'text-silver' : 'navtext'}`}
        >
          Read more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
