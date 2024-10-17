# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2023-08-24T13:00:43.871Z"),
  modifiedAt: new Date("2022-06-11T05:25:03.700Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  clientSecret: "<value>",
  successUrl: "https://appropriate-horde.info/",
  productPriceId: "<value>",
  productPrice: {
    createdAt: new Date("2022-09-09T18:27:38.526Z"),
    modifiedAt: new Date("2022-04-16T13:09:43.732Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 571158,
    maximumAmount: 217338,
    presetAmount: 377150,
  },
  url: "https://extra-large-pearl.com/",
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