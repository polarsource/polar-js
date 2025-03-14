# ListResourceUnionPaymentMethodCardPaymentMethodGeneric

## Example Usage

```typescript
import { ListResourceUnionPaymentMethodCardPaymentMethodGeneric } from "@polar-sh/sdk/models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.js";

let value: ListResourceUnionPaymentMethodCardPaymentMethodGeneric = {
  items: [
    {
      id: "<id>",
      type: "<value>",
      createdAt: new Date("2023-12-05T07:06:31.528Z"),
      default: false,
    },
  ],
  pagination: {
    totalCount: 754148,
    maxPage: 121606,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Items*[]                                           | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |