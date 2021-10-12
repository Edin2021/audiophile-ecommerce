import { useHistory } from "react-router";

function GoBackButton() {
  const history = useHistory();
  const prevPage = () => {
    history.goBack();
  };
  return (
    <button type="button" className="go-back-btn" onClick={prevPage}>
      go back
    </button>
  );
}

export default GoBackButton;
