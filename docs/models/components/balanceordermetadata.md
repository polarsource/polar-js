# BalanceOrderMetadata

## Example Usage

```typescript
import { BalanceOrderMetadata } from "@polar-sh/sdk/models/components/balanceordermetadata.js";

let value: BalanceOrderMetadata = {
  transactionId: "<id>",
  orderId: "<id>",
  amount: 809581,
  currency: "Saint Helena Pound",
  presentmentAmount: 633245,
  presentmentCurrency: "<value>",
  taxAmount: 867884,
  fee: 852414,
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `transactionId`       | *string*              | :heavy_check_mark:    | N/A                   |
| `orderId`             | *string*              | :heavy_check_mark:    | N/A                   |
| `productId`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `subscriptionId`      | *string*              | :heavy_minus_sign:    | N/A                   |
| `amount`              | *number*              | :heavy_check_mark:    | N/A                   |
| `netAmount`           | *number*              | :heavy_minus_sign:    | N/A                   |
| `currency`            | *string*              | :heavy_check_mark:    | N/A                   |
| `presentmentAmount`   | *number*              | :heavy_check_mark:    | N/A                   |
| `presentmentCurrency` | *string*              | :heavy_check_mark:    | N/A                   |
| `taxAmount`           | *number*              | :heavy_check_mark:    | N/A                   |
| `taxState`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `taxCountry`          | *string*              | :heavy_minus_sign:    | N/A                   |
| `fee`                 | *number*              | :heavy_check_mark:    | N/A                   |