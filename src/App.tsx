import { useState } from 'react'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'

import { Dashboard } from './pages/Dashboard'
import { Header } from './components/Header'
import { RootProvider } from './contexts'
import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal'

Modal.setAppElement('#root')

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false)
  }

  return (
    <RootProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isModalOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <ToastContainer />
      <GlobalStyle />
    </RootProvider>
  )
}
