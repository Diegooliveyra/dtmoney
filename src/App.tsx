import { NewTransactionModal } from 'components/NewTransactionModal';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionsModal, setIsNewTransactionsModal] = useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModal(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModal(false);
  }
  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModal}
        onRequestClose={handleCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </>
  );
}
