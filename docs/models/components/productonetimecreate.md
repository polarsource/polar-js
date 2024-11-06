# ProductOneTimeCreate

Schema to create a one-time product.

## Example Usage

```typescript
import { ProductOneTimeCreate } from "@polar-sh/sdk/models/components";

let value: ProductOneTimeCreate = {
  name: "<value>",
  prices: [
    {
      priceAmount: 455389,
    },
  ],
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The name of the product.                                                                                                    |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The description of the product.                                                                                             |
| `prices`                                                                                                                    | *components.Prices*[]                                                                                                       | :heavy_check_mark:                                                                                                          | List of available prices for this product.                                                                                  |
| `medias`                                                                                                                    | *string*[]                                                                                                                  | :heavy_minus_sign:                                                                                                          | List of file IDs. Each one must be on the same organization as the product, of type `product_media` and correctly uploaded. |
| `attachedCustomFields`                                                                                                      | [components.AttachedCustomFieldCreate](../../models/components/attachedcustomfieldcreate.md)[]                              | :heavy_minus_sign:                                                                                                          | List of custom fields to attach.                                                                                            |
| `organizationId`                                                                                                            | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The ID of the organization owning the product. **Required unless you use an organization token.**                           |