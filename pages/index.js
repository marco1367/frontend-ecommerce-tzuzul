import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import dotenv from 'dotenv';


export async function getStaticProps() {

  dotenv.config();
  const { NEXT_PUBLIC_API } = process.env;

  axios.defaults.baseURL = NEXT_PUBLIC_API || 'http://localhost:8000';

  return {
    props: {}
  }
};

export default function Home() {
  return (
    <div>
      <h1>HOMA SOY EL INDEX</h1>
    </div>
  )
}
