// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, deleteTransactionItem} = props
  const {transactionId, title, amount, option} = eachTransaction

  const onClickDelete = () => {
    deleteTransactionItem(transactionId)
  }

  return (
    <li>
      <hr />
      <div className="transactionItemClass">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{option}</p>
        <button data-testid="delete" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
