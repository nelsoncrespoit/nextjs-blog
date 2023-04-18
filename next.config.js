const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_user: "fico",
        mongodb_password: "RWCuAHjJN0GPQN5X",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    env: {
      mongodb_user: "fico",
      mongodb_password: "RWCuAHjJN0GPQN5X",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};

("mongodb+srv://fico:RWCuAHjJN0GPQN5X@cluster0.ciea5h4.mongodb.net/my-blog?retryWrites=true&w=majority");
