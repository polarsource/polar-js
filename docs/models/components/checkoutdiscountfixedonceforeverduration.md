# CheckoutDiscountFixedOnceForeverDuration

Schema for a fixed amount discount that is applied once or forever.

## Example Usage

```typescript
import { CheckoutDiscountFixedOnceForeverDuration } from "@polar-sh/sdk/models/components/checkoutdiscountfixedonceforeverduration.js";

let value: CheckoutDiscountFixedOnceForeverDuration = {
  duration: "repeating",
  type: "percentage",
  amount: 333965,
  currency: "Surinam Dollar",
  id: "<value>",
  name: "<value>",
  code: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `duration`                                                                 | [components.DiscountDuration](../../models/components/discountduration.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `type`                                                                     | [components.DiscountType](../../models/components/discounttype.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `amount`                                                                   | *number*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `currency`                                                                 | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the object.                                                      |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `code`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |