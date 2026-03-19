# ProductPriceFixed

A fixed price for a product.

## Example Usage

```typescript
import { ProductPriceFixed } from "@polar-sh/sdk/models/components/productpricefixed.js";

let value: ProductPriceFixed = {
  createdAt: new Date("2026-12-26T12:23:44.317Z"),
  modifiedAt: new Date("2026-06-01T02:05:27.121Z"),
  id: "<value>",
  source: "catalog",
  amountType: "fixed",
  priceCurrency: "<value>",
  isArchived: false,
  productId: "<value>",
  priceAmount: 416058,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the price.                                                                          |
| `source`                                                                                      | [components.ProductPriceSource](../../models/components/productpricesource.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amountType`                                                                                  | *"fixed"*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priceCurrency`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency in which the customer will be charged.                                           |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the price is archived and no longer available.                                        |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product owning the price.                                                       |
| `priceAmount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The price in cents.                                                                           |