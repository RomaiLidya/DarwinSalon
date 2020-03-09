import {
  Association,
  BelongsToCreateAssociationMixin,
  BelongsToGetAssociationMixin,
  BelongsToSetAssociationMixin,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyCreateAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin,
  HasManyRemoveAssociationsMixin,
  HasManySetAssociationsMixin,
  HasManyCountAssociationsMixin,
  Sequelize
} from 'sequelize';

import ModelBase from './ModelBase';
import { Models } from '../typings/Models';
import Transaction from './Transaction';
import Commission from './Commission';
import Stock from './Stock';
import Purchase from './Purchase';
import { ItemResponseModel } from '../../typings/ResponseFormat';

export default class Item extends ModelBase {
  public id!: number;
  public itemType!: string;
  public sellingPrice!: number;
  public category!: string;
  public Remark!: string;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createTransaction: BelongsToCreateAssociationMixin<Transaction>;
  public getTransaction: BelongsToGetAssociationMixin<Transaction>;
  public setTransaction: BelongsToSetAssociationMixin<Transaction, number>;

  public createCommission: BelongsToCreateAssociationMixin<Commission>;
  public getCommission: BelongsToGetAssociationMixin<Commission>;
  public setCommission: BelongsToSetAssociationMixin<Commission, number>;

  public getPurchase: HasManyGetAssociationsMixin<Purchase>;
  public addPurchase: HasManyAddAssociationMixin<Purchase, number>;
  public addPurchases: HasManyAddAssociationsMixin<Purchase, number>;
  public countPurchase: HasManyCountAssociationsMixin;
  public createPurchase: HasManyCreateAssociationMixin<Purchase>;
  public hasPurchase: HasManyHasAssociationMixin<Purchase, number>;
  public hasPurchases: HasManyHasAssociationsMixin<Purchase, number>;
  public removePurchases: HasManyRemoveAssociationsMixin<Purchase, number>;
  public removePurchase: HasManyRemoveAssociationMixin<Purchase, number>;
  public setPurchase: HasManySetAssociationsMixin<Purchase, number>;

  public getStock: HasManyGetAssociationsMixin<Stock>;
  public addStock: HasManyAddAssociationMixin<Stock, number>;
  public addStocks: HasManyAddAssociationsMixin<Stock, number>;
  public countStock: HasManyCountAssociationsMixin;
  public createStock: HasManyCreateAssociationMixin<Stock>;
  public hasStock: HasManyHasAssociationMixin<Stock, number>;
  public hasStocks: HasManyHasAssociationsMixin<Stock, number>;
  public removeStocks: HasManyRemoveAssociationsMixin<Stock, number>;
  public removeStock: HasManyRemoveAssociationMixin<Stock, number>;
  public setStock: HasManySetAssociationsMixin<Stock, number>;

  public static associations: {
    Transaction: Association<Item, Transaction>;
    Commission: Association<Item, Commission>;
    Purchase: Association<Item, Purchase>;
    Stock: Association<Item, Stock>;
  };

  public static associate(models: Models) {
    Item.belongsTo(models.Transaction);
    Item.belongsTo(models.Commission);
    Item.hasMany(models.Stock);
    Item.hasMany(models.Purchase);
  }

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
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
        Remark: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Item',
        freezeTableName: true,
        comment: 'Item store all item information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): ItemResponseModel {
    const { id, itemType, sellingPrice, category, Remark } = this;

    return {
      id,
      itemType,
      sellingPrice,
      category,
      Remark
    };
  }
}
