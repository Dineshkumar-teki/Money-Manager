// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props

  let initialBalance = 0
  let initialExpenses = 0

  if (transactionList.length > 0) {
    transactionList.map(eachTransaction => {
      if (eachTransaction.option === 'Income') {
        console.log(typeof eachTransaction.amount)
        initialBalance = initialBalance + parseInt(eachTransaction.amount)
      } else {
        initialExpenses = initialExpenses + parseInt(eachTransaction.amount)
      }
    })
  }
  let totalBalance = initialBalance - initialExpenses

  return (
    <div className="middleSection">
      <div className="balancecardContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="titletext">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {totalBalance}
          </p>
        </div>
      </div>
      <div className="incomecardContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="titletext">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {initialBalance}
          </p>
        </div>
      </div>
      <div className="expensescardContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="titletext">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {initialExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
