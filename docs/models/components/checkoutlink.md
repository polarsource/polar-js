# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2024-04-15T02:43:00.812Z"),
  modifiedAt: new Date("2024-04-05T22:09:08.993Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  clientSecret: "<value>",
  successUrl: "https://putrid-iridescence.com/",
  productPriceId: "<value>",
  productPrice: {
    createdAt: new Date("2022-01-15T04:22:51.791Z"),
    modifiedAt: new Date("2023-12-07T04:57:49.901Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 172105,
  },
  url: "https://vivacious-chops.name/",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Creation timestamp of the object.                                                              |
| `modifiedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | Last modification timestamp of the object.                                                     |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | The ID of the object.                                                                          |
| `metadata`                                                                                     | Record<string, *string*>                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `paymentProcessor`                                                                             | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `clientSecret`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | Client secret used to access the checkout link.                                                |
| `successUrl`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | URL where the customer will be redirected after a successful payment.                          |
| `productPriceId`                                                                               | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the product price to checkout.                                                           |
| `productPrice`                                                                                 | *components.ProductPrice*                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |