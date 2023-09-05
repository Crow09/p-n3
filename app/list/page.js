import client from "@/util/database";
import Link from "next/link";

export default async function List() {
  const db = await client.db("sports");
  const dbList = await db.collection("soccer").find().toArray();
  console.log(dbList);
  return (
    <div className="list">
      {
        dbList.map(item => <div className="list-item"><Link href={`/detail/${item._id}`}>{item.name}</Link></div>)
      }
    </div>
  )
}