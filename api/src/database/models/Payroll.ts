import { Association, BelongsToCreateAssociationMixin, BelongsToGetAssociationMixin, BelongsToSetAssociationMixin } from 'sequelize';

import ModelBase from './ModelBase';
import { DataTypes, Sequelize } from 'sequelize';
import { PayrollResponseModel } from '../../typings/ResponseFormat';
import Employee from './Employee';
import { Models } from '../typings/Models';

export default class Payroll extends ModelBase {
  public id!: number;
  public month!: Date;
  public year!: Date;
  public totalCommision!: number;
  public payDeduction!: number;
  public additionalPay!: number;
  public basicSalary!: number;
  public remark?: string;

  // timestamp
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Auto generated methods from associations
  public createEmployee: BelongsToCreateAssociationMixin<Payroll>;
  public getEmployee: BelongsToGetAssociationMixin<Payroll>;
  public setEmployee: BelongsToSetAssociationMixin<Payroll, number>;

  public static associations: {
    Employee: Association<Payroll, Employee>;
  };

  public static associate(models: Models) {
    Payroll.belongsTo(models.Employee);
  }
  public static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        month: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        year: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        totalCommision: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        payDeduction: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        additionalPay: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        basicSalary: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        remark: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'Payroll',
        freezeTableName: true,
        comment: 'Payroll stores all payroll information',
        schema: 'darwinSalon'
      }
    );

    return this;
  }

  public toResponseFormat(): PayrollResponseModel {
    const { id, month, year, totalCommision, payDeduction, additionalPay, basicSalary, remark } = this;

    return {
      id,
      month,
      year,
      totalCommision,
      payDeduction,
      additionalPay,
      basicSalary,
      remark
    };
  }
}
