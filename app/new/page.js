export default async function New() {
  return (
    <div>
      <form action="/api/new" method="post">
        <div className="new">
          <div className="new-item">
            <label>Name : </label>
            <input type="text" name="name" />
          </div>
          <div className="new-item">
            <label>Back number : </label>
            <input type="text" ame="num" />
          </div>
          <div className="new-item">
            <label>Team : </label>
            <input type="text" name="team" />
          </div>
        </div>
        <button style={{margin:"15px",fontSize:"15px"}} type="submit">Registration</button>
      </form>
    </div>
  )
}