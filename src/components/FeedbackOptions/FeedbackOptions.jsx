import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback}) {
  const namesOfItems = Object.keys(options);

   const getNameOfItem = (name) => {
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1).toLowerCase()}`;
  };

  return (
    <ul className={s.list}>
      {namesOfItems.map((item) => (
        <li key={item}>
          <button onClick={() => onLeaveFeedback(item)} className={s.button}>
            {getNameOfItem(item)}{" "}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};