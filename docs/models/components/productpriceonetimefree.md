# ProductPriceOneTimeFree

A free one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTimeFree } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFree = {
  createdAt: new Date("2023-06-29T02:05:44.031Z"),
  modifiedAt: new Date("2024-04-27T22:07:26.523Z"),
  id: "<value>",
  isArchived: false,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the price.                                                                                         |
| `amountType`                                                                                                 | [components.ProductPriceOneTimeFreeAmountType](../../models/components/productpriceonetimefreeamounttype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isArchived`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the price is archived and no longer available.                                                       |
| `type`                                                                                                       | [components.ProductPriceOneTimeFreeType](../../models/components/productpriceonetimefreetype.md)             | :heavy_check_mark:                                                                                           | The type of the price.                                                                                       |