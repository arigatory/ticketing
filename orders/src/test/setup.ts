import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'

declare global {
  var signin: () => string[];
}

let mongo: MongoMemoryServer;

jest.mock('../nats-wrapper')


beforeAll(async () => {
  jest.clearAllMocks();
  process.env.JWT_KEY = 'random_string';
  mongo = await MongoMemoryServer.create();
  const montoUri = mongo.getUri();

  await mongoose.connect(montoUri, {});
});

beforeEach(async () => {
  if (mongoose.connection.db) {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
      await collection.deleteMany({});
    }
  }
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});

global.signin = () => {
 // build JWT payload{ id, email}
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  }

 // Create the JWT!
 const token = jwt.sign(payload, process.env.JWT_KEY!);

 // Build session object
 const session = { jwt: token};

 const sessionJSON = JSON.stringify(session);

 const base64 = Buffer.from(sessionJSON).toString('base64');

 return [`session=${base64}`];
};
