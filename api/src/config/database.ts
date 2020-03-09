import { Sequelize } from 'sequelize';
import Logger from '../Logger';
import User from '../database/models/User';
import Payroll from '../database/models/Payroll';
import Employee from '../database/models/Employee';
import Commission from '../database/models/Commission';
import Customer from '../database/models/Customer';
import Transaction from '../database/models/Transaction';
import Item from '../database/models/Item';
import Stock from '../database/models/Stock';
import Purchase from '../database/models/Purchase';
import Agent from '../database/models/Agent';
import { Models } from '../database/typings/Models';

const { DB_HOST, DB_PORT, DB_SCHEMA, DB_USER, DB_PW, DB_POOL_ACQUIRE, DB_POOL_IDLE, DB_POOL_MAX_CONN, DB_POOL_MIN_CONN, DB_LOG_LEVEL } = process.env;

const LOG = new Logger('sequelize');

/**
 * The same database user is used to access the different tenants / schema
 * This decision is made because
 *  1. User can only access the wrong schema if the data is corrupted or hacked.
 *     The hacker can access all tenants information if the app is compromised
 *  2. Having different connection to the same database is overkilled
 */
export const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PW, {
  dialect: 'postgres',
  host: DB_HOST,
  pool: {
    acquire: +DB_POOL_ACQUIRE,
    idle: +DB_POOL_IDLE,
    max: +DB_POOL_MAX_CONN,
    min: +DB_POOL_MIN_CONN
  },
  port: +DB_PORT,
  timezone: 'Asia/Singapore',
  logging: (msg: string) => {
    LOG.log(DB_LOG_LEVEL, msg);
  }
});

export const models: Models = {
  User: User.initModel(sequelize),
  Payroll: Payroll.initModel(sequelize),
  Employee: Employee.initModel(sequelize),
  Commission: Commission.initModel(sequelize),
  Customer: Customer.initModel(sequelize),
  Transaction: Transaction.initModel(sequelize),
  Item: Item.initModel(sequelize),
  Stock: Stock.initModel(sequelize),
  Purchase: Purchase.initModel(sequelize),
  Agent: Agent.initModel(sequelize)
};

Object.keys(models).forEach((key: string) => {
  const model = models[key];

  model.associate(models);
});
