# ProductPriceOneTimeFree

A free one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTimeFree } from "@polar-sh/sdk/models/components";

let value: ProductPriceOneTimeFree = {
  createdAt: new Date("2022-10-28T16:59:00.609Z"),
  modifiedAt: new Date("2024-11-09T15:56:51.918Z"),
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