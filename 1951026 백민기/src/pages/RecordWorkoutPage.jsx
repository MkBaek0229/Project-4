import { useParams } from "react-router-dom";

function RecordWorkoutPage() {
  const param = useParams();
  return <>상세페이지 {param.id}</>;
}

export default RecordWorkoutPage;
