const CronJob = require('cron').CronJob;
const {google} = require("googleapis");
const admin = require('firebase-admin');
const serviceAccount = require("./take-away-castello-130c6-firebase-adminsdk-erch2-36d0090f5d.json");
const service = google.sheets("v4");
const credentials = require("./take-away-castello-b270ec0428a2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://take-away-castello-130c6.firebaseio.com"
});
const db = admin.firestore();

const authClient = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key.replace(/\\n/g, "\n"),
  ["https://www.googleapis.com/auth/spreadsheets"]
);

async function loadAnswers() {
  try {
    const token = await authClient.authorize();
    authClient.setCredentials(token);
    const res = await service.spreadsheets.values.get({
      auth: authClient,
      spreadsheetId: "1lCbCzmSnIAprBAxcx0pxRhu3LS1EautqaM7kRAXbAB4",
      range: "A:I",
    });

    const rows = res.data.values;
    // Remove the headers
    rows.shift()

    const snap = await db.collection('establishments').get();

    if (rows.length > snap.size) {
      // For each row
      for (const row of rows.slice(snap.size, rows.length)) {
        const establiment = {
          timestamp: row[0],
          name: row[1],
          friendlyName: row[1].toLowerCase().split(' ').join('-'),
          description: row[2],
          miniatura: row[3],
          contactInfo: row[4],
          timetable: row[5],
          address: row[6],
          coordinates: row[7],
          menuImg: row[8],
          menu: row[9],
          delivering: row[10],
          creation_date: new Date()
        };
        console.log(establiment);

        await db.collection("establishments").add(establiment)
      }
    } else {
      console.log("No new establiments found.");
    }

  } catch (error) {
    console.log(error);
  }

}

var job = new CronJob(
  '*/30 * * * *',
  async () => {
    loadAnswers();
  },
  null,
  true
);
job.start();
