# ListResourceUnionPaymentMethodCardPaymentMethodGeneric

## Example Usage

```typescript
import { ListResourceUnionPaymentMethodCardPaymentMethodGeneric } from "@polar-sh/sdk/models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.js";

let value: ListResourceUnionPaymentMethodCardPaymentMethodGeneric = {
  items: [
    {
      id: "<id>",
      type: "<value>",
      createdAt: new Date("2025-02-01T06:48:50.620Z"),
      default: false,
    },
  ],
  pagination: {
    totalCount: 245804,
    maxPage: 157506,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Items*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |