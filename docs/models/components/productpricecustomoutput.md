# ProductPriceCustomOutput

A pay-what-you-want price for a product.

## Example Usage

```typescript
import { ProductPriceCustomOutput } from "@polar-sh/sdk/models/components/productpricecustomoutput.js";

let value: ProductPriceCustomOutput = {
  createdAt: new Date("2025-03-30T14:24:30.734Z"),
  modifiedAt: new Date("2023-03-24T10:27:49.678Z"),
  id: "<value>",
  amountType: "custom",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  minimumAmount: 958646,
  maximumAmount: 563198,
  presetAmount: null,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the price.                                                                                                    |
| `amountType`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `isArchived`                                                                                                            | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | Whether the price is archived and no longer available.                                                                  |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The ID of the product owning the price.                                                                                 |
| `type`                                                                                                                  | [components.ProductPriceType](../../models/components/productpricetype.md)                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`recurringInterval`~~                                                                                                 | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md)                    | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `priceCurrency`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The currency.                                                                                                           |
| `minimumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The minimum amount the customer can pay.                                                                                |
| `maximumAmount`                                                                                                         | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The maximum amount the customer can pay.                                                                                |
| `presetAmount`                                                                                                          | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | The initial amount shown to the customer.                                                                               |