# ProductPriceOneTimeCustom

A pay-what-you-want price for a one-time product.

## Example Usage

```typescript
import { ProductPriceOneTimeCustom } from "@polar-sh/sdk/models/components/productpriceonetimecustom.js";

let value: ProductPriceOneTimeCustom = {
  createdAt: new Date("2023-09-21T01:29:35.775Z"),
  modifiedAt: new Date("2023-06-25T22:48:47.472Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  minimumAmount: 796392,
  maximumAmount: 959167,
  presetAmount: 458139,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the price.                                                                          |
| `amountType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the price is archived and no longer available.                                        |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product owning the price.                                                       |
| `priceCurrency`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency.                                                                                 |
| `minimumAmount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The minimum amount the customer can pay.                                                      |
| `maximumAmount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The maximum amount the customer can pay.                                                      |
| `presetAmount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The initial amount shown to the customer.                                                     |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the price.                                                                        |