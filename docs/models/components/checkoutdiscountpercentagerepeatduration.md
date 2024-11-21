# CheckoutDiscountPercentageRepeatDuration

Schema for a percentage discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { CheckoutDiscountPercentageRepeatDuration } from "@polar-sh/sdk/models/components";

let value: CheckoutDiscountPercentageRepeatDuration = {
  duration: "forever",
  durationInMonths: 413557,
  type: "percentage",
  basisPoints: 917050,
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `duration`                                                                 | [components.DiscountDuration](../../models/components/discountduration.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `durationInMonths`                                                         | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.DiscountType](../../models/components/discounttype.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `basisPoints`                                                              | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the object.                                                      |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |