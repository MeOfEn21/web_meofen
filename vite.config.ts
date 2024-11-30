export default {
    build: {
      rollupOptions: {
        input: {
          main: "./index.html",
        },
      },
    },
    server: {
      historyApiFallback: true,
    },
  };
  