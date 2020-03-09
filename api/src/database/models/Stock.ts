import {
  Association,
  DataTypes,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  Sequelize
} from 'sequelize';

import ModelBase from './ModelBase';
import { Models } from '../typings/Models';
import Item from './Item';
import { StockResponseModel } from '../../typings/ResponseFormat';

export default class Stock extends ModelBase {
  public id!: number;
  public stock!: number;
  public readonly item!: Item;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createItem: BelongsToCreateAssociationMixin<Item>;
  public getItem: BelongsToGetAssociationMixin<Item>;
  public setItem: BelongsToSetAssociationMixin<Item, number>;

  public static associations: {
    Item: Association<Stock, Item>;
  };

  public static associate(models: Models) {
    Stock.belongsTo(models.Item);
  }

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        stock: {
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

  public toResponseFormat(): StockResponseModel {
    const { id, stock } = this;

    return {
      id,
      stock
    };
  }
}
