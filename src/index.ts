import dotenv from "dotenv";
import { connect } from "./db";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);

  await connect();
});
