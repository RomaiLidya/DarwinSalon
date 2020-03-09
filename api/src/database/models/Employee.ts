import {
  Association,
  BelongsToCreateAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  HasManyAddAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyCreateAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyCountAssociationsMixin,
  Sequelize
} from 'sequelize';

import ModelBase from './ModelBase';
import { Models } from '../typings/Models';
import Payroll from './Payroll';
import Transaction from './Transaction';
import Commission from './Commission';
import Commision from './Commission';

export default class Employee extends ModelBase {
  public id!: number;
  public name!: string;
  public dateOfBirth?: string;
  public address?: string;
  public contactNumber?: string;
  public nameOfFamily?: string;
  public numberOfFamily?: string;
  public basicSalary?: number;
  public readonly payroll?: Payroll;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createPayroll: HasManyCreateAssociationMixin<Payroll>;
  public getPayroll: HasManyGetAssociationsMixin<Payroll>;
  public setPayroll: HasManySetAssociationsMixin<Payroll, number>;

  public createCommision: BelongsToCreateAssociationMixin<Commission>;
  public setCommission: BelongsToSetAssociationMixin<Commision, number>;

  public getTransaction!: HasManyGetAssociationsMixin<Transaction>;
  public addTransaction!: HasManyAddAssociationMixin<Transaction, number>;
  public addTransactions!: HasManyAddAssociationsMixin<Transaction, number>;
  public countTransaction!: HasManyCountAssociationsMixin;
  public createTransaction: HasManyCreateAssociationMixin<Transaction>;
  public hasTransaction: HasManyHasAssociationMixin<Transaction, number>;
  public hasTransactions: HasManyHasAssociationsMixin<Transaction, number>;
  public removeTransactions: HasManyRemoveAssociationsMixin<Transaction, number>;
  public removeTransaction: HasManyRemoveAssociationMixin<Transaction, number>;
  public setTransaction: HasManySetAssociationsMixin<Transaction, number>;

  public static associations: {
    Payrol: Association<Employee, Payroll>;
    Commission: Association<Employee, Commission>;
    Transaction: Association<Employee, Transaction>;
  };

  public static associate(models: Models) {
    Employee.hasMany(models.Payroll);
    Employee.belongsTo(models.Commission);
    Employee.hasMany(models.Transaction);
  }

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        dateOfBirth: {
          type: DataTypes.DATE,
          allowNull: true
        },
        address: {
          type: DataTypes.STRING,
          allowNull: true
        },
        contactNumber: {
          type: DataTypes.STRING,
          allowNull: true
        },
        nameOfFamily: {
          type: DataTypes.STRING,
          allowNull: true
        },
        numberOfFamily: {
          type: DataTypes.STRING,
          allowNull: true
        },
        basicSalary: {
          type: DataTypes.FLOAT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'Employee',
        freezeTableName: true,
        comment: 'Employee ',
        schema: 'darwinSalon'
      }
    );

    return this;
  }
}
