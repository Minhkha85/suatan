module.exports = function override(config, env) {
    // Bỏ qua các cảnh báo source-map-loader từ node_modules
    config.module.rules.forEach(rule => {
      if (rule.loader && rule.loader.includes('source-map-loader')) {
        rule.exclude = /node_modules/;
      }
    });
  
    return config;
  };