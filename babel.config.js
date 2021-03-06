module.exports = api => {
    api.cache(true);

    const presets = [['@babel/preset-env'], '@babel/preset-typescript'];

    return {
        presets,
        plugins: ["@babel/plugin-proposal-class-properties"],
    };
};
