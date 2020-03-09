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
import Purchase from './Purchase';
import { AgentResponseModel } from '../../typings/ResponseFormat';

export default class Agent extends ModelBase {
  public id!: number;
  public name!: string;
  public address!: string;
  public contactNumber!: string;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createPurchase: BelongsToCreateAssociationMixin<Purchase>;
  public getPurchase: BelongsToGetAssociationMixin<Purchase>;
  public setPurchase: BelongsToSetAssociationMixin<Purchase, number>;

  public static associations: {
    Purchase: Association<Agent, Purchase>;
  };

  public static associate(models: Models) {
    Agent.belongsTo(models.Purchase);
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
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        address: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        contactNumber: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Agent',
        freezeTableName: true,
        comment: 'agent store all agent information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): AgentResponseModel {
    const { id, name, address, contactNumber } = this;

    return {
      id,
      name,
      address,
      contactNumber
    };
  }
}
