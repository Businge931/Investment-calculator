declare type NewInvestmentValues ={
  initialInvestment: string;
  annualInvestment: string;
  expectedReturn: string;
  duration: string;
}

declare type InvestmentCalculationData = {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
};