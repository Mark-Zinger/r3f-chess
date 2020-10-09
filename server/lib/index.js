import express from 'express';
import config  from 'config';
import mongoose from 'mongoose';
import routes from '../routes'

import clc from 'cli-color';

const app = express();


app.use('/', routes.AuthRoutes)

const PORT = config.get('port') || 5000;

const startServer = async () => {
  try {
    console.info(clc.green('[server] ') + `conecting to database`);
    await mongoose.connect(config.get('mongoURL'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }).then(()=> {
      console.info(clc.green('[server] ') + `connecting successfully`);
    }).catch((e)=> {
      console.info(clc.red('[server error] ') + `could not establish a connection to the database:\n\t` + e.message);
      process.exit(1);
    })

    app.listen(PORT, ()=> console.info(clc.green('\n[server] ') + `starting on port ${PORT}`))

  } catch (e) {
    console.log (clc.red('\n[server error] ') + e.message);
    process.exit(1);
  }
}

startServer();

