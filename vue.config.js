module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/scss/_mixin.scss";
        @import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
