// our-domain.com/api/new-meetup
import prisma from "../../lib/prisma.js";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return addNewMeetup(req, res);
    default:
  }
}

async function addNewMeetup(req, res) {
  try {
    const { title, image, description } = req.body;
    const result = await prisma.meetups.create({
      data: {
        title,
        image,
        description,
      },
    });
    return res.status(201).json({
      message: "Add new meetup successfully",
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      message: new Error(e).message,
    });
  }
}
