import "dotenv/config";
import app from "./src/app.js";

import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

await connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server is running on ${process.env.BASE_URL} in ${process.env.NODE_ENV} mode`,
      );
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database", err);
    process.exit(1);
  });
