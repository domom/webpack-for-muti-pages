// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['last 5 version', 'Android >= 4.0'],
      //是否美化属性值 默认：true 
      cascade: true,
      //是否去掉不必要的前缀 默认：true 
      remove: true
    }
  }
}