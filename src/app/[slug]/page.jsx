import React from "react";
import styles from "./singlepage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur{" "}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>10.3.2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, aut magni voluptas porro laudantium incidunt officia
              quam consectetur asperiores ad earum quae fuga maiores quaerat
              pariatur? Eos aperiam illo iusto!
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              deleniti dolore pariatur tempore, culpa quis sint quae beatae ipsa
              temporibus ad recusandae provident cum dignissimos nisi molestiae
              voluptatibus. Facere, provident.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est
              rerum consectetur sunt possimus odit, quia harum eum ipsum
              suscipit atque quis quos ut quasi nesciunt rem ducimus autem esse.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
