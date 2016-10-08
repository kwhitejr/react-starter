export default {
  env: process.env.NODE_ENV || 'development',
  meta: {
    title: 'React Starter'
  },
  server: {
    port: process.env.PORT || 3000
  },
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/duff-boods'
};
