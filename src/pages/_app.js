import '../style.css'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>S0umyajit | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
