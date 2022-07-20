import PropTypes from "prop-types";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const { image, title, description } = props;

  return (
    <section className={classes.detail}>
      <img src={image} title={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

MeetupDetail.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupDetail;
