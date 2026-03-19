# BalanceCreditOrderMetadata

## Example Usage

```typescript
import { BalanceCreditOrderMetadata } from "@polar-sh/sdk/models/components/balancecreditordermetadata.js";

let value: BalanceCreditOrderMetadata = {
  orderId: "<id>",
  amount: 783140,
  currency: "Falkland Islands Pound",
  taxAmount: 521323,
  fee: 140660,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orderId`          | *string*           | :heavy_check_mark: | N/A                |
| `productId`        | *string*           | :heavy_minus_sign: | N/A                |
| `subscriptionId`   | *string*           | :heavy_minus_sign: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_check_mark: | N/A                |
| `taxAmount`        | *number*           | :heavy_check_mark: | N/A                |
| `taxState`         | *string*           | :heavy_minus_sign: | N/A                |
| `taxCountry`       | *string*           | :heavy_minus_sign: | N/A                |
| `fee`              | *number*           | :heavy_check_mark: | N/A                |