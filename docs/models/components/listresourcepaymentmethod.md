# ListResourcePaymentMethod

## Example Usage

```typescript
import { ListResourcePaymentMethod } from "@polar-sh/sdk/models/components/listresourcepaymentmethod.js";

let value: ListResourcePaymentMethod = {
  items: [],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.PaymentMethod*[]                                   | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |