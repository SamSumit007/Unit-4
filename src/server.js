const app = require("./index");

const connect = require("./configs/db");

app.listen(4322, async function () {
  try{
  await connect();
  console.log("listening on port 4322");
  } catch (err){
  consoleerror(err.messege);
}
});
