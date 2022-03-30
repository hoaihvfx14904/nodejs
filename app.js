
const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencode({extended: false}));


app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) =>{
    res.status(404).send('<h1> page not found</h1>');
});

    
app.listen(3000);

