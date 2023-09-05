import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = await client.db("sports");
  const dbResult = await db.collection("soccer").findOne({"_id" : new ObjectId(props.params.id)});
  return (
    <div>
      <form action="/api/edit" method="post">
        <div className="new">
          <div className="new-item">
            <label>Name : </label>
            <input type="text" defaultValue={dbResult.name} name="name" />
          </div>
          <div className="new-item">
            <label>Back number : </label>
            <input type="text" defaultValue={dbResult.num} name="num" />
          </div>
          <div className="new-item">
            <label>Team : </label>
            <input type="text" defaultValue={dbResult.team} name="team" />
          </div>
          <input type="hidden" value={dbResult._id} name="_id" />
        </div>
        <button style={{margin:"15px",fontSize:"15px"}} type="submit">Edit</button>
      </form>
    </div>
  )
}