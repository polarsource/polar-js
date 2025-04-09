# CustomerPortalCustomersGetPaymentMethodsResponse

## Example Usage

```typescript
import { CustomerPortalCustomersGetPaymentMethodsResponse } from "@polar-sh/sdk/models/operations/customerportalcustomersgetpaymentmethods.js";

let value: CustomerPortalCustomersGetPaymentMethodsResponse = {
  result: {
    items: [
      {
        id: "<id>",
        type: "<value>",
        createdAt: new Date("2024-01-02T16:37:24.927Z"),
        default: false,
      },
    ],
    pagination: {
      totalCount: 374098,
      maxPage: 472137,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |