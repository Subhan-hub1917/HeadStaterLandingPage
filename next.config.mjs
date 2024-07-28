/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add custom webpack rules
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[ext]',
          },
        },
      });
  
      return config;
    },    

};

export default nextConfig;


// module.exports = {
//     webpack: (config, { isServer }) => {
//       // Add custom webpack rules
//       config.module.rules.push({
//         test: /\.(mp4|webm|ogg|swf|ogv)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/videos/',
//             outputPath: 'static/videos/',
//             name: '[name].[ext]',
//           },
//         },
//       });
  
//       return config;
//     },
//   };
  