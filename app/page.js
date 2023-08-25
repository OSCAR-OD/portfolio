"use client"
import Link from "next/link";
import  {useEffect} from 'react';
import mNav from './components/JsContent/MNav';
import lazyLoading from './components/JsContent/LazyLoading';

//import Image from 'next/image'
//import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Featured from './components/Featured/Featured'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

export default function Home() {
 
  useEffect(() => {
    mNav();
    lazyLoading();
  }, []);

  return (
    // <main className={styles.main}>
     <main >


<Hero />
<About />
<Featured />
<Work />
<Contact />

       </main>
  )
}
