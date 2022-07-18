import MeetupItem from "./MeetupItem";
import PropTypes from "prop-types";
import classes from "./MeetupList.module.css";
import { meetupPropType } from "../shared/propTypes";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

MeetupList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape(meetupPropType)).isRequired,
};

MeetupList.defaultProps = {
  meetups: [],
};

export default MeetupList;
