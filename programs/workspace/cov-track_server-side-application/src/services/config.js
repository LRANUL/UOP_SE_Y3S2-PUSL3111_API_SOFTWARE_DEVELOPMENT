const devConfig = {
  MONGO_URL: 'mongodb://developer:OWBFpoXsPEQWjKgK@covtrack-cluster-1-shard-00-00.tpmbm.mongodb.net:27017,covtrack-cluster-1-shard-00-01.tpmbm.mongodb.net:27017,covtrack-cluster-1-shard-00-02.tpmbm.mongodb.net:27017/CovTrack_DB_Primary?ssl=true&replicaSet=atlas-r45e9e-shard-0&authSource=admin&retryWrites=true&w=majority',
  JWT_SECRET: 'thisisasecret',
  JWT_SECRET_ADMIN: 'thisistheadminsecret',
  JWT_SECRET_PHI: 'thisisthephisecret',
  JWT_SECRET_CDC: 'thisisthecdcsecret'
};

const testConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/server-test',
};

const prodConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/server-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 5000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
