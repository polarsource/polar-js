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
        createdAt: new Date("2024-02-16T06:49:59.233Z"),
        default: false,
      },
    ],
    pagination: {
      totalCount: 542838,
      maxPage: 418580,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |