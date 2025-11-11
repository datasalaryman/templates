import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createSolanaDevnet, createSolanaLocalnet, createWalletUiConfig, WalletUi, WalletUiGillProvider } from '@wallet-ui/react-gill'

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaLocalnet()],
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletUi config={config}>
      <WalletUiGillProvider>
        <App />
      </WalletUiGillProvider>
    </WalletUi>
  </StrictMode>
)
