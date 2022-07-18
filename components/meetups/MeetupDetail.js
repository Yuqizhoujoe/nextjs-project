import {Fragment} from "react";
import PropTypes from "prop-types";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
    const { imageUrl, title, description } = props;

    return (
        <section className={classes.detail}>
            <img
                src={imageUrl}
                title={title}
            />
            <h1>A first meetup</h1>
            <p>{description}</p>
        </section>
    );
}

MeetupDetail.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default MeetupDetail;
