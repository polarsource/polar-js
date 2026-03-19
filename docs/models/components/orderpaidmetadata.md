# OrderPaidMetadata

## Example Usage

```typescript
import { OrderPaidMetadata } from "@polar-sh/sdk/models/components/orderpaidmetadata.js";

let value: OrderPaidMetadata = {
  orderId: "<id>",
  amount: 899980,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `orderId`                | *string*                 | :heavy_check_mark:       | N/A                      |
| `productId`              | *string*                 | :heavy_minus_sign:       | N/A                      |
| `billingType`            | *string*                 | :heavy_minus_sign:       | N/A                      |
| `amount`                 | *number*                 | :heavy_check_mark:       | N/A                      |
| `currency`               | *string*                 | :heavy_minus_sign:       | N/A                      |
| `netAmount`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `taxAmount`              | *number*                 | :heavy_minus_sign:       | N/A                      |
| `appliedBalanceAmount`   | *number*                 | :heavy_minus_sign:       | N/A                      |
| `discountAmount`         | *number*                 | :heavy_minus_sign:       | N/A                      |
| `discountId`             | *string*                 | :heavy_minus_sign:       | N/A                      |
| `platformFee`            | *number*                 | :heavy_minus_sign:       | N/A                      |
| `subscriptionId`         | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringInterval`      | *string*                 | :heavy_minus_sign:       | N/A                      |
| `recurringIntervalCount` | *number*                 | :heavy_minus_sign:       | N/A                      |