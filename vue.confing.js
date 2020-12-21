module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/eric-project/'
        : './vue/dist',

        
 baseUrl: './vue/dist'
}