import {Component} from 'react'

import './index.css'

import {v4 as UUIDV4} from 'uuid'

import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const initialTransactionList = []

class MoneyManage extends Component {
  state = {
    transactionList: initialTransactionList,
    title: '',
    amount: '',
    option: 'Income',
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getOption = event => {
    if (event.target.value === 'INCOME') {
      this.setState({option: 'Income'})
    } else {
      this.setState({option: 'Expenses'})
    }
  }

  addTransaction = event => {
    const {title, amount, option} = this.state
    event.preventDefault()
    const transactionObj = {
      transactionId: UUIDV4(),
      title,
      amount,
      option,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, transactionObj],
      title: '',
      amount: '',
      option: 'Income',
    }))
  }

  deleteTransactionItem = id => {
    const {transactionList} = this.state
    this.setState({
      transactionList: transactionList.filter(eachTransaction => {
        if (eachTransaction.transactionId !== id) {
          return eachTransaction
        }
      }),
    })
  }

  render() {
    const {title, amount, option, transactionList} = this.state
    console.log(title, amount, option, transactionList)
    return (
      <div className="bgContainer">
        <div className="moneyManageContainer">
          <div className="topSection">
            <h1 className="username">Hi, Dinesh</h1>
            <p className="welcomeTitle">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <MoneyDetails transactionList={transactionList} />
          <div className="bottomSection">
            <div className="bottomLeftSideConatiner">
              <div>
                <h1 className="formTitle">Add Transaction</h1>
                <form onSubmit={this.addTransaction}>
                  <label htmlFor="title">Title</label>
                  <input
                    id="title"
                    value={title}
                    type="text"
                    onChange={this.getTitle}
                  />
                  <label htmlFor="amount">Amount</label>
                  <input
                    id="amount"
                    value={amount}
                    type="text"
                    onChange={this.getAmount}
                  />
                  <label htmlFor="type">Type</label>
                  <select id="type" value={option} onChange={this.getOption}>
                    {transactionTypeOptions.map(eachOption => (
                      <option value={eachOption.optionId}>
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="Addbtn">
                    Add
                  </button>
                </form>
              </div>
            </div>
            <div className="bottomRightSideConatiner">
              <h1 className="formTitle">History</h1>
              <div className="historyCard">
                <div className="headings">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
                <ul>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      eachTransaction={eachTransaction}
                      key={eachTransaction.transactionId}
                      deleteTransactionItem={this.deleteTransactionItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManage
