# ListResourceUnionPaymentMethodCardPaymentMethodGeneric

## Example Usage

```typescript
import { ListResourceUnionPaymentMethodCardPaymentMethodGeneric } from "@polar-sh/sdk/models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.js";

let value: ListResourceUnionPaymentMethodCardPaymentMethodGeneric = {
  items: [
    {
      id: "<id>",
      createdAt: new Date("2024-02-01T09:05:51.525Z"),
      default: false,
      card: {
        brand: "<value>",
        last4: "<value>",
        expMonth: 182151,
        expYear: 488289,
      },
    },
  ],
  pagination: {
    totalCount: 271639,
    maxPage: 507776,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Items*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |