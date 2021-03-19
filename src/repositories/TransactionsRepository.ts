import Transaction from '../models/Transaction';

interface BalanceTDO {
  income: number;
  outcome: number;
  total: number;
}

interface RequestTDO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): BalanceTDO {
    // TODO
    const { income, outcome } = this.transactions.reduce(
      (accumulator: BalanceTDO, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += transaction.value;
            break;
          case 'outcome':
            accumulator.outcome += transaction.value;
            break;
          default:
            break;
        }

        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const total = income - outcome;

    return { income, outcome, total };
  }

  public create({ value, title, type }: RequestTDO): Transaction {
    // TODO

    const transaction = new Transaction({ value, title, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
