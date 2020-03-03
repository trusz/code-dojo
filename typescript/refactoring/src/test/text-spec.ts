
export function generateText(tempIn: TemplateInput) {
  return `Statement for ${tempIn.customerName}
  Hamlet: ${tempIn.hamletPrice} (${tempIn.hamletSeats} seats)
  As You Like It: ${tempIn.asYouLikePrice} (${tempIn.asYouLikeSeats} seats)
  Othello: ${tempIn.othelloPrice} (${tempIn.othelloSeats} seats)
Amount owed is ${tempIn.amountOwed}
You earned ${tempIn.earnedCredits} credits
`;
}

// tslint:disable-next-line: interface-name
export interface TemplateInput {
  customerName: string;
  hamletPrice: string;
  hamletSeats: string;
  asYouLikePrice: string;
  asYouLikeSeats: string;
  othelloPrice: string;
  othelloSeats: string;
  amountOwed: string;
  earnedCredits: string;
}
