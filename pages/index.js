import MeetupList from "../components/meetups/MeetupList";
import PropTypes from "prop-types";
import { meetupPropType } from "../components/shared/propTypes";
import prisma from "../lib/prisma.js";
import Head from "next/head.js";
import { Fragment } from "react";

function HomePage(props) {
  const { meetups: meetUps } = props;
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups!"
        />
      </Head>
      <MeetupList meetups={meetUps} />
    </Fragment>
  );
}

// SSR
// getServerSideProps only runs on server-side and never runs on the browser
// This gets called on every request
// export async function getServerSideProps({req, res}) {
//     // fetch data from API
//     const meetups = await prisma.meetups.findMany();
//     console.dir(meetups);
//
//     return {
//         props: {
//             meetups: meetups
//         },
//     };
// }

// SSG
// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  // fetch data from an API
  const meetups = await prisma.meetups.findMany();

  return {
    props: {
      meetups: meetups,
    },
  };
  // return {
  //     props: {
  //         meetups: MEETUPS
  //     },
  //     // Next.js will attempt to re-generate the page:
  //     // - When a request comes in
  //     // - At most once every 10 seconds
  //     revalidate: 10
  // }
}

HomePage.propTypes = {
    meetups: PropTypes.arrayOf(PropTypes.shape(meetupPropType)).isRequired,
}

export default HomePage;
