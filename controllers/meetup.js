export const postNewMeetup = async (req, res) => {
  const data = req.body;
  const meetupsCollection = req.db.collection("meetups");
  const result = await meetupsCollection.insertOne(data);
  console.log(result);
  res.status(201).json({ message: "Meetup inserted!", data: result });
};
