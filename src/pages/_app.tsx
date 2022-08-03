import BaseLayout from 'components/layouts/BaseLayout'
import 'styles/output.css'

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
