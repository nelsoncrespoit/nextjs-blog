import Image from 'next/image';

import styles from './Hero.module.css';

const Hero = (props) => {
    return(
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image src='/images/site/Nelson.png' 
                       alt='an image showing Nelson' 
                       width={300} 
                       height={300}/>
            </div>
            <h1>Hi, I am Nelson</h1>
            <p>
                This is a blog about Frontend Development !!!
            </p>
        </section>
    );
};

export default Hero;