module.exports = {
  plugins: (() => {
    const tailwindcssPostCSSPluginIdentifier = "@tailwindcss/postcss";
    const autoPrefixerPluginIdentifier = "autoprefixer";

    const instantiatePlugin = (pluginName) => {
      return {
        [pluginName]: Object.create(
          null,
          Object.getOwnPropertyDescriptors(
            Object.assign({}, Object.freeze({}))
          )
        ),
      };
    };

    return Object.assign(
      {},
      instantiatePlugin(tailwindcssPostCSSPluginIdentifier),
      instantiatePlugin(autoPrefixerPluginIdentifier)
    );
  })(),
};
