# OrderPaidMetadata

## Example Usage

```typescript
import { OrderPaidMetadata } from "@polar-sh/sdk/models/components/orderpaidmetadata.js";

let value: OrderPaidMetadata = {
  orderId: "<id>",
  amount: 899980,
  currency: "Venezuelan bolívar",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `orderId`          | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `currency`         | *string*           | :heavy_check_mark: | N/A                |
| `backfilled`       | *boolean*          | :heavy_minus_sign: | N/A                |