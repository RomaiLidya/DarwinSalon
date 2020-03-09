import {
  Association,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCountAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasOneGetAssociationMixin,
  HasOneSetAssociationMixin,
  HasOneCreateAssociationMixin,
  Sequelize
} from 'sequelize';

import ModelBase from './ModelBase';
import Employee from './Employee';
import { Models } from '../typings/Models';
import Customer from './Customer';
import Item from './Item';
import { TransactionResponseModel } from '../../typings/ResponseFormat';

export enum PaymentMethod {
  CASH = 'CASH',
  CREDITCARD = 'CREDITCARD',
  DEBITCARD = 'DEBITCARD'
}

export enum DiscountTypes {
  PERCENT = 'PERCENT',
  FIXED = 'FIXED',
  NA = 'NA'
}

export default class Transaction extends ModelBase {
  public id!: number;
  public discount!: number;
  public discountType!: string;
  public totalTransaction!: number;
  public paymentMethod!: string;
  public commission!: number;
  public readonly customer?: Customer;
  public name!: string;
  public address!: string;
  public dateOfBitrh!: number;
  public idCard!: number;
  public readonly item?: Item;
  public itemType!: string;
  public sellingPrice!: number;
  public category!: string;
  public remark!: string;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createEmployee: BelongsToCreateAssociationMixin<Employee>;
  public getEmployee: BelongsToGetAssociationMixin<Employee>;
  public setEmployee: BelongsToSetAssociationMixin<Employee, number>;

  public getCustomer: HasOneGetAssociationMixin<Customer>;
  public setCustomer: HasOneSetAssociationMixin<Customer, number>;
  public createCustomer: HasOneCreateAssociationMixin<Customer>;

  public getItem: HasManyGetAssociationsMixin<Item>;
  public setItem: HasManySetAssociationsMixin<Item, number>;
  public createItem: HasManyCreateAssociationMixin<Item>;
  public addItem!: HasManyAddAssociationMixin<Item, number>;
  public addItems!: HasManyAddAssociationsMixin<Item, number>;
  public countItem!: HasManyCountAssociationsMixin;
  public hasItem: HasManyHasAssociationMixin<Item, number>;
  public hasItems: HasManyHasAssociationsMixin<Item, number>;
  public removeItems: HasManyRemoveAssociationsMixin<Item, number>;
  public removeItem: HasManyRemoveAssociationMixin<Item, number>;

  public static associations: {
    Employee: Association<Transaction, Employee>;
    Customer: Association<Transaction, Customer>;
    Item: Association<Transaction, Item>;
  };

  public static associate(models: Models) {
    Transaction.belongsTo(models.Employee);
    Transaction.hasOne(models.Customer);
    Transaction.hasMany(models.Item);
  }

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        discount: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0
        },
        discountType: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'NA'
        },
        totalTransaction: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        paymentMethod: {
          type: DataTypes.STRING,
          autoIncrement: true,
          primaryKey: true
        },
        commission: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        address: {
          type: DataTypes.STRING,
          autoIncrement: true,
          primaryKey: true
        },
        dateOfBirth: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        idCard: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        itemType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        sellingPrice: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        category: {
          type: DataTypes.STRING,
          allowNull: false
        },
        remark: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Transaction',
        freezeTableName: true,
        comment: 'Transaction store all Transaction information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): TransactionResponseModel {
    const {
      id,
      discount,
      discountType,
      totalTransaction,
      paymentMethod,
      commission,
      name,
      address,
      dateOfBitrh,
      idCard,
      itemType,
      sellingPrice,
      category,
      remark
    } = this;

    return {
      id,
      discount,
      discountType,
      totalTransaction,
      paymentMethod,
      commission,
      name,
      address,
      dateOfBitrh,
      idCard,
      itemType,
      sellingPrice,
      category,
      remark
    };
  }
}
