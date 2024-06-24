declare type NewInvestmentValues = {
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
};

declare type InvestmentInput = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};

declare type AnnualDataType = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
