import StyledComponentsRegistry from '@/components/functional/StyledComponentsRegistry'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <>
            <Main />
            <NextScript />
          </>
        </StyledComponentsRegistry>
      </body>
    </Html>
  )
}
