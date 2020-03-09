import {
  Association,
  DataTypes,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyAddAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManySetAssociationsMixin,
  HasManyCountAssociationsMixin,
  Sequelize
} from 'sequelize';

import ModelBase from './ModelBase';
import { Models } from '../typings/Models';
import Item from './Item';
import Agent from './Agent';
import Stock from './Stock';
import { PurchaseResponseModel } from '../../typings/ResponseFormat';

export default class Purchase extends ModelBase {
  public id!: number;
  public dateOfPurchase!: number;
  public readonly item!: Item;
  public readonly agent!: Agent;
  public stockCode!: number;
  public invoiceCode!: string;
  public quantity!: number;
  public purchasePrice!: number;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createItem: BelongsToCreateAssociationMixin<Item>;
  public getItem: BelongsToGetAssociationMixin<Item>;
  public setItem: BelongsToSetAssociationMixin<Item, number>;

  public createStock: BelongsToCreateAssociationMixin<Stock>;
  public getStock: BelongsToGetAssociationMixin<Stock>;
  public setStock: BelongsToSetAssociationMixin<Stock, number>;

  public getAgent: HasManyGetAssociationsMixin<Agent>;
  public addAgent: HasManyAddAssociationMixin<Agent, number>;
  public addAgents: HasManyAddAssociationsMixin<Agent, number>;
  public countAgent: HasManyCountAssociationsMixin;
  public createAgent: HasManyCreateAssociationMixin<Agent>;
  public hasAgent: HasManyHasAssociationMixin<Agent, number>;
  public hasAgents: HasManyHasAssociationsMixin<Agent, number>;
  public removeAgents: HasManyRemoveAssociationsMixin<Agent, number>;
  public removeAgent: HasManyRemoveAssociationMixin<Agent, number>;
  public setAgent: HasManySetAssociationsMixin<Agent, number>;

  public static associations: {
    Item: Association<Purchase, Item>;
    Stock: Association<Purchase, Stock>;
    Agent: Association<Purchase, Agent>;
  };

  public static associate(models: Models) {
    Purchase.belongsTo(models.Item);
    Purchase.belongsTo(models.Stock);
    Purchase.hasMany(models.Agent);
  }
  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        dateOfPurchase: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        stockCode: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        invoiceCode: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        purchasePrice: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Stock',
        freezeTableName: true,
        comment: 'Stock store all Stock information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): PurchaseResponseModel {
    const { id, dateOfPurchase, stockCode, invoiceCode, quantity, purchasePrice } = this;

    return {
      id,
      dateOfPurchase,
      stockCode,
      invoiceCode,
      quantity,
      purchasePrice
    };
  }
}
