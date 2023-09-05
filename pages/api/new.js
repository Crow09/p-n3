import client from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "GET")
    return res.status(400).json("BAD");
  if (req.body.name == "Ronaldo")
    return res.status(400).json("No Ronaldo");
  const db = await client.db("sports");
  const list = await db.collection("soccer").insertOne({...req.body});

  if (list.acknowledged)
    res.redirect(302, `/msg/200`);
  else
    res.redirect(302, `/msg/400`);
}