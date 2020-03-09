import { Association, DataTypes, HasManyAddAssociationMixin, HasManyRemoveAssociationMixin, HasManyGetAssociationsMixin, Sequelize } from 'sequelize';

import ModelBase from './ModelBase';
import { Models } from '../typings/Models';
import Item from './Item';
import { CommissionResponseModel } from '../../typings/ResponseFormat';

export default class Commision extends ModelBase {
  public id!: number;
  public commission!: number;
  public readonly item?: Item;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public getItem!: HasManyGetAssociationsMixin<Item>;
  public addItem!: HasManyAddAssociationMixin<Item, number>;
  public removeItem!: HasManyRemoveAssociationMixin<Item, number>;

  public static associations: {
    Item: Association<Commision, Item>;
  };

  public static associate(models: Models) {
    Commision.hasMany(models.Item);
  }

  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        commission: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Commision',
        freezeTableName: true,
        comment: 'Commision store all commision information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): CommissionResponseModel {
    const { id, commission } = this;

    return {
      id,
      commission
    };
  }
}
