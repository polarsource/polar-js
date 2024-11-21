# CheckoutDiscountFixedRepeatDuration

Schema for a fixed amount discount that is applied on every invoice
for a certain number of months.

## Example Usage

```typescript
import { CheckoutDiscountFixedRepeatDuration } from "@polar-sh/sdk/models/components";

let value: CheckoutDiscountFixedRepeatDuration = {
  duration: "repeating",
  durationInMonths: 81399,
  type: "fixed",
  amount: 742652,
  currency: "Rupiah",
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
| `amount`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `currency`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the object.                                                      |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |