# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2023-08-24T08:05:58.593Z"),
  modifiedAt: new Date("2022-08-23T01:09:24.286Z"),
  id: "<value>",
  metadata: {
    "key": 735506,
  },
  clientSecret: "<value>",
  successUrl: "https://snappy-riser.net",
  productPriceId: "<value>",
  productPrice: {
    createdAt: new Date("2023-06-11T06:39:09.896Z"),
    modifiedAt: new Date("2022-03-10T01:14:25.475Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 835054,
    maximumAmount: 219715,
    presetAmount: 12940,
    recurringInterval: "year",
  },
  url: "https://beloved-tributary.com/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `metadata`                                                                                    | Record<string, *components.CheckoutLinkMetadata*>                                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `paymentProcessor`                                                                            | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientSecret`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Client secret used to access the checkout link.                                               |
| `successUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | URL where the customer will be redirected after a successful payment.                         |
| `productPriceId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | ID of the product price to checkout.                                                          |
| `productPrice`                                                                                | *components.ProductPrice*                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |