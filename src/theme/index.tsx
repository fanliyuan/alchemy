import { createGlobalStyle } from 'styled-components'
import { Colors } from './styled'

export default function colors(darkMode:boolean):Colors{
  return {
    white:"#fff",
    black:"#000",
    themeColor:'#42B6D6',
  
    bg1:darkMode ? '#000' : '#fff',
    linkColor: '#42B6D6'
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'Roboto', sans-serif;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(false).linkColor}; 
   text-decoration: none;
 }

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
  li {
    list-style: none;
  }
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
.MuiTooltip-tooltip {
  background: #2B3647 !important;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.05);
  padding: 10px 15px !important;
}
`