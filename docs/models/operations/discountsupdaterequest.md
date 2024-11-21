# DiscountsUpdateRequest

## Example Usage

```typescript
import { DiscountsUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: DiscountsUpdateRequest = {
  id: "<value>",
  discountUpdate: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The discount ID.                                                       |
| `discountUpdate`                                                       | [components.DiscountUpdate](../../models/components/discountupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |