import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'

// 可以參考 index.html
// ReactDOM render 由 component 組成的 tree，放到 id=root 的 div 裡面
// React.StrictMode 是一個 built-in 的 component（功能是 identify potential props）
// ReactDOM 是 for web。另外還有 for app（ReactNative）和 for desktop app 的
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
