import { Fragment } from "react";
import Hero from "../components/Home-Page/Hero/Hero";
import FeaturedPosts from "../components/Home-Page/FeaturedPosts/FeaturedPosts";
import { getAllFeaturedPosts } from "../helper/posts-util";
import Head from "next/head";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Nelson' Blog</title>
        <meta name="description" content="I post about programming and web development"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const featuredPosts = getAllFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;



// const DUMMY_POSTS = [
//   {
//     slug: 'getting-started-with-nextjs',
//     title: 'Getting Started with NextJS',
//     excerpt: 'NextJS is a React Framework for production',
//     image: 'getting-started-with-next.png',
//     date: '2023-01-28',
//   },
//   {
//     slug: 'getting-started-with-nextjs1',
//     title: 'Getting Started with NextJS',
//     excerpt: 'NextJS is a React Framework for production',
//     image: 'getting-started-with-next.png',
//     date: '2023-01-28',
//   },
//   {
//     slug: 'getting-started-with-nextjs2',
//     title: 'Getting Started with NextJS',
//     excerpt: 'NextJS is a React Framework for production',
//     image: 'getting-started-with-next.png',
//     date: '2023-01-28',
//   },
//   {
//     slug: 'getting-started-with-nextjs3',
//     title: 'Getting Started with NextJS',
//     excerpt: 'NextJS is a React Framework for production',
//     image: 'getting-started-with-next.png',
//     date: '2023-01-28',
//   }
// ];

// const DUMMY_POSTS = [
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs2",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs3",
//   },
//   {
//     title: "Getting Started with NextJS",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//     date: "2022-02-10",
//     slug: "getting-started-with-nextjs4",
//   },
// ];