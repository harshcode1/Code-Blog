import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
          <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Add your headings here */}
        <h1 className={styles.title}>CodeBlog</h1>
        <h2 className={styles.subtitle}>A blog for Coders by a Coder</h2>
        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      
      {/* In case if i want to create some external sources.... */}
      {/* <script src="sc.js"></script> */}
      

    </main>
  );
}
