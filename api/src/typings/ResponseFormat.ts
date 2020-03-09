// import { MaritalStatus, LanguageSpoken, TagUser, PlacementStatus } from '../database/models/Candidate';

export interface PayrollResponseModel {
  id: number;
  month: Date;
  year: Date;
  totalCommision: number;
  payDeduction: number;
  additionalPay: number;
  basicSalary: number;
  remark: string;
}

export interface TransactionResponseModel {
  id: number;
  discount: number;
  discountType: string;
  totalTransaction: number;
  paymentMethod: string;
  commission: number;
  name: string;
  address: string;
  dateOfBitrh: number;
  idCard: number;
  itemType: string;
  sellingPrice: number;
  category: string;
  remark: string;
}
export interface CustomerResponseModel {
  id: number;
  name: string;
  address: string;
  dateOfBirth: number;
  idCard: number;
  remark: string;
}
export interface ItemResponseModel {
  id: number;
  itemType: string;
  sellingPrice: number;
  category: string;
  Remark: string;
}
export interface StockResponseModel {
  id: number;
  stock: number;
}
export interface PurchaseResponseModel {
  id: number;
  dateOfPurchase: number;
  stockCode: number;
  invoiceCode: string;
  quantity: number;
  purchasePrice: number;
}
export interface AgentResponseModel {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
}
export interface UserResponseModel {
  id: number;
  loginName: string;
  password: string;
  active: boolean;
  displayName: string;
  email: string;
}
export interface CommissionResponseModel {
  id: number;
  commission: number;
}
