# BalanceDisputeMetadata

## Example Usage

```typescript
import { BalanceDisputeMetadata } from "@polar-sh/sdk/models/components/balancedisputemetadata.js";

let value: BalanceDisputeMetadata = {
  transactionId: "<id>",
  disputeId: "<id>",
  amount: 327260,
  currency: "Algerian Dinar",
  presentmentAmount: 151666,
  presentmentCurrency: "<value>",
  taxAmount: 276802,
  fee: 462573,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `transactionId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `disputeId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `orderId`             | *string*              | :heavy_minus_sign:    | N/A                   |
| `orderCreatedAt`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `productId`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `subscriptionId`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `amount`              | *number*              | :heavy_check_mark:    | N/A                   |
| `currency`            | *string*              | :heavy_check_mark:    | N/A                   |
| `presentmentAmount`   | *number*              | :heavy_check_mark:    | N/A                   |
| `presentmentCurrency` | *string*              | :heavy_check_mark:    | N/A                   |
| `taxAmount`           | *number*              | :heavy_check_mark:    | N/A                   |
| `taxState`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `taxCountry`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `fee`                 | *number*              | :heavy_check_mark:    | N/A                   |