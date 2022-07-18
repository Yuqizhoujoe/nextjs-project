// our-domain.com/{meetupId}
import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const defaultMeetup = {
    id: "m1",
    title: "LOL",
    imageUrl:
        "https://tr.rbxcdn.com/539f164bbfaed8f12855b3e0cc0baccf/500/280/Image/Jpeg",
    description: "Anime girl 1",
};

function MeetupDetails(props) {

    return (
        <Fragment>
            <MeetupDetail {...defaultMeetup} />
        </Fragment>
    );
}

// If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
// getStaticPaths must be used with getStaticProps. You cannot use it with getServerSideProps.
export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    const {meetupId} = context.params;
    console.log(meetupId);
    return {
        props: {
            meetupDetail: {...defaultMeetup}
        }
    }
}

export default MeetupDetails;
