# ProductBenefitsUpdate

Schema to update the benefits granted by a product.

## Example Usage

```typescript
import { ProductBenefitsUpdate } from "@polar-sh/sdk/models/components/productbenefitsupdate.js";

let value: ProductBenefitsUpdate = {
  benefits: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `benefits`                                                                     | *string*[]                                                                     | :heavy_check_mark:                                                             | List of benefit IDs. Each one must be on the same organization as the product. |