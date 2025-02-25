# ListResourceUnionPaymentMethodCardPaymentMethodGeneric

## Example Usage

```typescript
import { ListResourceUnionPaymentMethodCardPaymentMethodGeneric } from "@polar-sh/sdk/models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.js";

let value: ListResourceUnionPaymentMethodCardPaymentMethodGeneric = {
  items: [
    {
      id: "<id>",
      createdAt: new Date("2025-08-20T01:08:40.919Z"),
      default: false,
      card: {
        brand: "<value>",
        last4: "<value>",
        expMonth: 658874,
        expYear: 81609,
      },
    },
  ],
  pagination: {
    totalCount: 437446,
    maxPage: 596759,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Items*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |