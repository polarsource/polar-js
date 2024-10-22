# ProductRecurringCreate

Schema to create a recurring product, i.e. a subscription.

## Example Usage

```typescript
import { ProductRecurringCreate } from "@polar-sh/sdk/models/components";

let value: ProductRecurringCreate = {
  name: "<value>",
  prices: [
    {
      recurringInterval: "year",
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The name of the product.                                                                                                    |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The description of the product.                                                                                             |
| `prices`                                                                                                                    | *components.ProductRecurringCreatePrices*                                                                                   | :heavy_check_mark:                                                                                                          | List of available prices for this product.                                                                                  |
| `medias`                                                                                                                    | *string*[]                                                                                                                  | :heavy_minus_sign:                                                                                                          | List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded. |
| `organizationId`                                                                                                            | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The ID of the organization owning the product. **Required unless you use an organization token.**                           |