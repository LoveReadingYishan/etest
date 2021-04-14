module.exports = {
    devServer: {
      port: 8080, // 端口
    },
    configureWebpack:{
      resolve:{
        alias:{
          'components':'@/components',
          'assets':'@/assets',
          
  
      
      }
      }
    }
    // lintOnSave: false // 取消 eslint 验证
  }