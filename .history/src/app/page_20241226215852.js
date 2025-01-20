import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "../../utill/database";


export default async function Home() {

  const client = await connectDB;
  const db = client.db('coffee')
  // 해당 collection 의 모든 데이터를 가져옴.
  const result = await db.collection('list').find().toArray()

  console.log(result)
  return (
    <div className="main">
      <h2>메인</h2>
    </div>
  );
}
