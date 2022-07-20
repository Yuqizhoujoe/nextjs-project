// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from "next/head.js";

function NewMeetup() {
  const router = useRouter();

  const addMeetupHandler = async (meetUp) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetUp),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    // navigate back to home page
    router.push("/");
  };

  return (
      <Fragment>
        <Head>
          <title>Add a New Meetup</title>
          <meta name="description" content="Add your own meetup!"/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </Fragment>
  );
}

export default NewMeetup;
