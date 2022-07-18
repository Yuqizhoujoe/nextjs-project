// our-domain.com/api/new-meetup
import { createRouter } from 'next-connect';
import middleware from "../../util/database";
import {postNewMeetup} from "../../controllers/meetup";

const handler = createRouter();

handler.use(middleware);

// POST /api/new-meetup
handler.post(postNewMeetup);

export default handler;
