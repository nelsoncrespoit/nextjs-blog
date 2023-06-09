import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input !" });
      return;
    }

    //Store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ciea5h4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(
        //"mongodb+srv://fico:RWCuAHjJN0GPQN5X@cluster0.ciea5h4.mongodb.net/my-blog?retryWrites=true&w=majority"
        connectionString
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database !" });
      return;
    }
    //console.log(newMessage);

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed !" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Succesfully stored message!", message: newMessage });
  }
}

export default handler;
