import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { client } from './lib/apollo.ts'
import { ApolloProvider } from '@apollo/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider> 
  </StrictMode>,
)
