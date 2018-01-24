const app = require('./server/server');
const config = require('./server/config');

app.listen(config.port, () => {
  console.log(`Server listening on PORT ${config.port}`);
});
