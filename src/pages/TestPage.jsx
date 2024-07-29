import Head from 'next/head'
import MainContent from '../components/MainContent'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'
const HomePage = () => {
    return (
        <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <MainContent />
      
     

     
    </div>
    );
}

export default HomePage;