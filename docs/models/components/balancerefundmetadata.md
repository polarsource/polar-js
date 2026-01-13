# BalanceRefundMetadata

## Example Usage

```typescript
import { BalanceRefundMetadata } from "@polar-sh/sdk/models/components/balancerefundmetadata.js";

let value: BalanceRefundMetadata = {
  transactionId: "<id>",
  refundId: "<id>",
  amount: 155131,
  currency: "Cedi",
  presentmentAmount: 343736,
  presentmentCurrency: "<value>",
  taxAmount: 704694,
  fee: 492754,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `transactionId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `refundId`            | *string*              | :heavy_check_mark:    | N/A                   |
| `orderId`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `productId`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `subscriptionId`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `amount`              | *number*              | :heavy_check_mark:    | N/A                   |
| `currency`            | *string*              | :heavy_check_mark:    | N/A                   |
| `presentmentAmount`   | *number*              | :heavy_check_mark:    | N/A                   |
| `presentmentCurrency` | *string*              | :heavy_check_mark:    | N/A                   |
| `refundableAmount`    | *number*              | :heavy_minus_sign:    | N/A                   |
| `taxAmount`           | *number*              | :heavy_check_mark:    | N/A                   |
| `taxState`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `taxCountry`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `fee`                 | *number*              | :heavy_check_mark:    | N/A                   |