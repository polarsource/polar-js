# ListResourceUnionPaymentMethodCardPaymentMethodGeneric

## Example Usage

```typescript
import { ListResourceUnionPaymentMethodCardPaymentMethodGeneric } from "@polar-sh/sdk/models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.js";

let value: ListResourceUnionPaymentMethodCardPaymentMethodGeneric = {
  items: [
    {
      id: "<id>",
      type: "<value>",
      createdAt: new Date("2023-11-03T16:54:29.824Z"),
      default: false,
    },
  ],
  pagination: {
    totalCount: 133731,
    maxPage: 119743,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Items*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |