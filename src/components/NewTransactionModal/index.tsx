import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { useTransactions } from '../../hooks/useTransactions'

import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import closeImg from '../../assets/close.svg'

import { RadioBox, TransactionModalContainer, TransactionTypeWrap } from './styles'

interface NewTransactionModalProps {
  isModalOpen: boolean
  onRequestClose(): void
}

export function NewTransactionModal({ isModalOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState<'income' | 'expense'>('income')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  function handleTransactionType(newType: 'income' | 'expense') {
    setType(newType)
  }

  function clearValues() {
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('income')
  }

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    createTransaction({
      title,
      type,
      amount,
      category,
    }).then(() => {
      clearValues()
      onRequestClose()
    })
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Close Modal"/>
      </button>
      <TransactionModalContainer onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>
        <input
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Title" />
        <input
          type="number"
          onChange={e => setAmount(Number(e.target.value)) }
          placeholder="Amount" />

        <TransactionTypeWrap>
          <RadioBox
            type="button"
            isActive={type === 'income'}
            onClick={() => handleTransactionType('income')}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income"/>
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => handleTransactionType('expense')}
            isActive={type === 'expense'}
            activeColor="red"
          >
            <img src={expenseImg} alt="Expense"/>
            <span>Expense</span>
          </RadioBox>
        </TransactionTypeWrap>

        <input
          type="text"
          onChange={e => setCategory(e.target.value) }
          placeholder="Category" />
        <button type="submit">
          Create Transaction
        </button>
      </TransactionModalContainer>
    </Modal>
  )
}
