/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add custom webpack rules
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv|png|jpg)$/,
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
    env:{
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
      NEXT_PUBLIC_CLERK_SIGN_IN_URL:process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      NEXT_PUBLIC_CLERK_SIGN_UP_URL:process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
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
  