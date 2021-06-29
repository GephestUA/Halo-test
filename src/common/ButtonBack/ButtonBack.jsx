import { useHistory } from 'react-router-dom';

function ButtonBack(props) {
  const history = useHistory();

  return (
    <div>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}

export default ButtonBack;
