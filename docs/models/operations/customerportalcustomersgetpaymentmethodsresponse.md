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
        createdAt: new Date("2025-09-20T08:07:26.391Z"),
        default: false,
      },
    ],
    pagination: {
      totalCount: 306525,
      maxPage: 542927,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |