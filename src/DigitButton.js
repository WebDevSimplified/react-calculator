import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={(e) =>
      e.preventDefault();
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }
    >
      {digit}
    </button>
  )
}
