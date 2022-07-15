export type EbayResult = {
  itemId: number;
  title: string;
  galleryURL: string;
  viewItemURL: string;
  listingInfo: {
    buyItNowAvailable: boolean;
    startTime: string;
    endTime: string;
  };
  location: string;
  primaryCategory: {
    categoryName: string;
  };
  sellingStatus: {
    bidCount: number;
    convertedCurrentPrice: {
      value: number;
      currencyId: string;
    };
    timeLeft: string;
  };
  shippingInfo: {
    shipToLocation: string;
  };
};
