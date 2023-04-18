import { Fragment } from "react";
import AllPosts from "../../components/Posts/All-Posts";
import { getAllPosts } from "../../helper/posts-util";
import Head from "next/head";

function AllPostsPage(props) {
    return(
      <Fragment>
        <Head>
          <title>All Posts</title>
          <meta 
            name='description' 
            description='A list of programming-related tutorials and posts !'/>
        </Head>
        <AllPosts posts={props.posts}/>
      </Fragment>
    );
};

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
};

export default AllPostsPage;

// const DUMMY_POSTS = [
//     {
//       title: "Getting Started with NextJS",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs",
//     },
//     {
//       title: "Getting Started with NextJS",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs2",
//     },
//     {
//       title: "Getting Started with NextJS",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs3",
//     },
//     {
//       title: "Getting Started with NextJS",
//       image: "getting-started-nextjs.png",
//       excerpt:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
//       date: "2022-02-10",
//       slug: "getting-started-with-nextjs4",
//     },
//   ];