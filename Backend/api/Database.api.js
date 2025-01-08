import { DataAPIClient } from "@datastax/astra-db-ts";

async function getAnalyticsDataFromDB() {

  const client = new DataAPIClient(process.env.VITE_DATABASE_TOKEN);
  const db = client.db(
    process.env.VITE_DATABASE_URL
  );
  const collection = db.collection(process.env.VITE_DB_COLLECTION_NAME);

  const doc = await collection.find({}).toArray();
  var total_likes_db = 0;
  var total_comments_db = 0;
  var total_shares_db = 0;
  for (let i = 0; i < doc.length; i++) {
    total_likes_db += parseInt(doc[i].likes);
    total_comments_db += parseInt(doc[i].comments);
    total_shares_db += parseInt(doc[i].shares);
  }

  console.log("Connected to AstraDB:", total_likes_db, total_comments_db,total_shares_db );
  return {
    total_likes: total_likes_db,
    total_comments: total_comments_db,
    total_shares: total_shares_db,
  };
}


export { getAnalyticsDataFromDB };
