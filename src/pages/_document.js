import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/favicon.png`} />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          <meta name="description" content="Self Developed personal website build with React.js" />
          <meta itemProp="name" content="S0umyajit | Portfolio" />
          <meta itemProp="description" content="Self Developed personal website build with React.js" />
          <meta itemProp="image" content="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/Images/readme-img.png?token=AK7VCIF5RYEUZZAURELPTAC76U6AK" />
          <meta property="og:url" content="https://soumyajit.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="S0umyajit | Portfolio" />
          <meta property="og:description" content="Self Developed personal website build with React.js" />
          <meta property="og:image" content="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/Images/readme-img.png?token=AK7VCIF5RYEUZZAURELPTAC76U6AK" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="S0umyajit | Portfolio" />
          <meta name="twitter:description" content="Self Developed personal website build with React.js" />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/Images/readme-img.png?token=AK7VCIF5RYEUZZAURELPTAC76U6AK" />
          <noscript>You need to enable JavaScript to run this app.</noscript>
        </Head>
        
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument      
