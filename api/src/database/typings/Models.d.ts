import User from '../models/User';
import Payroll from '../models/Payroll';
import Employee from '../models/Employee';
import Commission from '../models/Commission';
import Customer from '../models/Customer';
import Transaction from '../models/Transaction';
import Item from '../models/Item';
import Stock from '../models/Stock';
import Purchase from '../models/Purchase';
import Agent from '../models/Agent';
import ModelBase from '../models/ModelBase';

export interface Models {
  User: typeof User;
  Payroll: typeof Payroll;
  Employee: typeof Employee;
  Commission: typeof Commission;
  Customer: typeof Customer;
  Transaction: typeof Transaction;
  Item: typeof Item;
  Stock: typeof Stock;
  Purchase: typeof Purchase;
  Agent: typeof Agent;
  [key: string]: typeof ModelBase;
}
