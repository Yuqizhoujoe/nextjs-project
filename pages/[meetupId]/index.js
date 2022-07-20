// our-domain.com/{meetupId}
import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import prisma from "../../lib/prisma.js";
import Head from "next/head.js";

function MeetupDetails(props) {
  const {meetupDetail} = props;
  const {title, description} = meetupDetail;

  return (
      <Fragment>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description}/>
        </Head>
        <MeetupDetail {...meetupDetail} />
      </Fragment>
  );
}

// If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
// getStaticPaths must be used with getStaticProps. You cannot use it with getServerSideProps.
export async function getStaticPaths() {
  const meetups = await prisma.meetups.findMany();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const meetUp = await prisma.meetups.findUnique({
    where: {
      id: meetupId,
    },
  });
  return {
    props: {
      meetupDetail: { ...meetUp },
    },
  };
}

// SSR
/*export async function getServerSideProps(context) {
  const { meetupId } = context.params;
  const meetupDetail = await prisma.meetups.findUnique({
    where: {
      id: meetupId,
    },
  });
  return {
    props: {
      meetupDetail,
    },
  };
}*/

export default MeetupDetails;
