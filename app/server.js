import express from 'express';
import routes from './routes';
import config from './config/constants';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(config.prefix, routes);

app.listen(config.port, () => {
    console.log(`
    Port: ${config.port}
    Env: ${app.get('env')}
  `);
});
