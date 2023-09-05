import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "GET")
    return res.status(400).json("BAD");
  if (req.body.name == "Ronaldo")
    return res.status(400).json("No Ronaldo");
  const db = await client.db("sports");
  const detail = {...req.body};
  delete detail._id;
  console.log(detail);
  const list = await db.collection("soccer").updateOne(
    {"_id" : new ObjectId(req.body._id)},
    {$set : {...detail}}
  );
  if (list.acknowledged)
    res.redirect(302, `/msg/300`);
  else
    res.redirect(302, `/msg/400`);
}