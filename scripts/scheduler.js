const fs = require("fs");
const { google } = require("googleapis");
const admin = require('firebase-admin');
const serviceAccount = require("./take-away-castello-b270ec0428a2.json");
const service = google.sheets("v4");
const credentials = require("./take-away-castello-b270ec0428a2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://take-away-castello-130c6.firebaseio.com"
});
const db = admin.firestore();

const authClient = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
);

(async function () {
    try {
        const token = await authClient.authorize();
        authClient.setCredentials(token);
        const res = await service.spreadsheets.values.get({
            auth: authClient,
            spreadsheetId: "1lCbCzmSnIAprBAxcx0pxRhu3LS1EautqaM7kRAXbAB4",
            range: "A:I",
        });

        const rows = res.data.values;

        if (rows.length) {

            // Remove the headers
            rows.shift()

            // For each row
            for (const row of rows) {
                const establiment = { 
                    timeStamp: row[0], 
                    answer: row[1],
                    miniatura: row[2],
                    horari: row[3],
                    adress: row[4],
                    menu: row[5],
                    description: row[6],
                    location: row[7],
                    tlf: row[8],
                };
                console.log(establiment);

                await db.collection("establiments-test").add(establiment)
            }

        } else {
            console.log("No data found.");  
        }

    } catch (error) {
        console.log(error);
    }

})();
