
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencode({extended: false}));


app.use(shopRoutes);
app.use(adminRoutes);



    
app.listen(3000);

