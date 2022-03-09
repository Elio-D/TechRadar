require('dotenv').config();
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const express = require("express");
const server = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { reset } = require("nodemon");
const { nextTick } = require('process');

server.use(cors({
  origin: 'http://localhost:4200',
  methods: ["GET", "POST", "PUT", "DELETE"],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
server.use(bodyParser.json());
server.use(express.json());

const connectionString = "mongodb+srv://userWEBLAB:123@techradar.z6vbj.mongodb.net/TechRadar?retryWrites=true&w=majority";

//get current user-berechtigung
server.get('/userAdminBerechtigung', authenticateToken, async (req, res) => {
  console.log(req.user);
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('users');
  const result = await collection.find({ benutzername: req.user.benutzername }).toArray();
  const berechtigung = result.map(function (benutzer) {
    return benutzer.berechtigung;
  })
  if (berechtigung == 'admin') {
    res.send(true);
  } else {
    res.send(false);
  }
});

//verifyUser
server.post('/login', async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collectionUsers = db.collection('users');
  const collectionLoginLogs = db.collection('loginLogs')
  const user = await collectionUsers.findOne({ benutzername: req.body.benutzername });
  if (user == null) {
    return res.status(400).send('Benutzer nicht gefunden')
  }
  try {
    if (await bcrypt.compare(req.body.passwort, user.passwort)) {
      const accessToken = generateAccessToken(user);
      var date = new Date();
      var dateTimeStamp = date.toLocaleDateString() + " " + date.toLocaleTimeString();
      collectionLoginLogs.insertOne({
        user: user.benutzername,
        loginTimeStamp: dateTimeStamp
      })
      res.status(200).send({ accessToken });
    } else {
      res.send(403).json({
        success: false,
        message: 'Passwort falsch'
      })
    }
  } catch {
    res.status(500).send()
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' })
}


//--------------------------------------


//gets all Technologies
server.get('/technologies', authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const result = await collection.find({}).toArray();
  res.send(result);
});

//gets published Technologies by kategorie
server.get('/technologies/:kategorie/published', authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const kategorieKlein = req.params.kategorie;
  const kategorieGross = kategorieKlein.charAt(0).toUpperCase() + kategorieKlein.slice(1);
  const result = await collection.find({ kategorie: kategorieGross, published: true }).toArray();
  if (result) {
    res.send(result);
  } else {
    res.status(404);
  }
  res.end();
});

//gets all Technologies from kategorie
server.get('/technologies/:kategorie', authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const kategorieKlein = req.params.kategorie;
  const kategorieGross = kategorieKlein.charAt(0).toUpperCase() + kategorieKlein.slice(1);
  const result = await collection.find({ kategorie: kategorieGross }).toArray();
  if (result) {
    res.send(result);
  } else {
    res.status(404);
  }
  res.end();
});

//update technologie by id
server.put('/technologies/:id', authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const update = req.body;
  const id = req.params.id;
  const filter = { _id: id };
  const result = await collection.updateOne({ _id: req.params.id }, { $set: update });
  if (result) {
    res.send(result);
  } else {
    res.status(404);
  }
  res.end();
});

//insert new technologie
server.post("/technologies", authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const result = await collection.insertOne(req.body);
  res.status(201);
  res.end();
});

//delete technologie by id
server.delete('/technologies/:id', authenticateToken, async (req, res) => {
  const client = await mongoClient.connect(connectionString);
  const db = client.db('TechRadar');
  const collection = db.collection('technologies');
  const update = req.body;
  const result = await collection.deleteOne({ _id: req.params.id });
  res.status(201);
  res.end();
});

server.listen(4566, () => {
  console.log("Tech-Radar MongoDB is running....");
});