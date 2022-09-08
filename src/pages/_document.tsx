import { useTheme } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const { theme } = useTheme()
  return (
    <Html>
      <Head />
      <body lang="en" data-theme={`${theme}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
