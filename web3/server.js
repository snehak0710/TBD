const express = require("express");
const fs = require("fs");
const { runDeployTransfer } = require("../web3/runDeploy");
const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json());

app.post("/earn", (req, res) => {
  const { receiverAddress, amt } = req.body;
  fs.writeFileSync(
    "../web3/receiver.js",
    `const receiverAddress = "${receiverAddress}";
const amt = ${amt};

module.exports = { receiverAddress, amt };
`
  );

  res.sendStatus(200);
});

app.post("/wallet", (req, res) => {
  const content = fs.readFileSync("./receiver.js", "utf-8");
  // const {walletAddress, claimAmt}
  res.send(`TOILA ${content}`);
});

app.post("/withdraw", async (req, res) => {
  const content = fs.readFileSync("./receiver.js", "utf-8");
  await runDeployTransfer();
  console.log("SUCCESFUL===============")
  // const {walletAddress, claimAmt}
  res.send(`TOILA ${content}`);
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
