import client from "@/util/database";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = await client.db("sports");
  const dbResult = await db.collection("soccer").findOne({"_id" : new ObjectId(props.params.id)});
  console.log(dbResult);
  return (
    <div>
      <div className="detail">
        <div className="detail-item">Name : {dbResult.name}</div>
        <div className="detail-item">Back number : {dbResult.num}</div>
        <div className="detail-item">Team : {dbResult.team}</div>
      </div>
      <Link href={`/edit/${props.params.id}`}><button style={{margin:"10px",fontSize:"20px"}}>Edit</button></Link>
    </div>
  )
}