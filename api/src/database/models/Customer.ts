import { DataTypes, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin, Sequelize } from 'sequelize';

import ModelBase from './ModelBase';
import Transaction from './Transaction';
import { CustomerResponseModel } from '../../typings/ResponseFormat';

export default class Customer extends ModelBase {
  public id!: number;
  public name!: string;
  public address!: string;
  public dateOfBirth!: number;
  public idCard!: number;
  public remark!: string;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createTransaction: BelongsToCreateAssociationMixin<Transaction>;
  public getTransaction: BelongsToGetAssociationMixin<Transaction>;
  public setTransaction: BelongsToSetAssociationMixin<Transaction, number>;

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
        address: {
          type: DataTypes.INTEGER,
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
        remark: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Customer',
        freezeTableName: true,
        comment: 'Customer store all customer information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): CustomerResponseModel {
    const { id, name, address, dateOfBirth, idCard, remark } = this;

    return {
      id,
      name,
      address,
      dateOfBirth,
      idCard,
      remark
    };
  }
}
