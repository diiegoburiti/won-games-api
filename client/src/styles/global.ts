import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body #__next {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
`
export default GlobalStyles
