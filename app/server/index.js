import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import router from './router';

var app = express();
app.set('port', (process.env.PORT || 3000));

app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.static(path.join(__dirname, '../frontend/assets')));

let hbs = exphbs.create({
  layoutsDir: path.join(__dirname, '/views'),
  defaultLayout: 'layouts/main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/**
* ROUTES
********************* */
app.use(router.Index);
app.use(router.Pinboard);

app.listen(app.get('port'), function () {
  console.log('Pinboard is running on port 😎 ', app.get('port'));
});
