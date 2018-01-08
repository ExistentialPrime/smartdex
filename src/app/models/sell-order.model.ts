export interface SellOrder {
	OrderNumber?: number;
	Token?: string;
	Units?: number;
	AskPrice?: number;
	AskPriceType?: string;
	NumberFilled?: number;
	PercentFilled?: number;
}
