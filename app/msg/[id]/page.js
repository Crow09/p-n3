export default function Msg(props) {
  let message = "";
  switch (props.params.id) {
    case "200" : message = "입력이 성공적으로 완료되었습니다."; break;
    case "300" : message = "수정이 성공적으로 완료되었습니다."; break;
    case "400" : message = "입력/수정이 실패되었습니다."; break;
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}