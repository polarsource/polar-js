# CustomerPortalCustomersGetPaymentMethodsResponse

## Example Usage

```typescript
import { CustomerPortalCustomersGetPaymentMethodsResponse } from "@polar-sh/sdk/models/operations/customerportalcustomersgetpaymentmethods.js";

let value: CustomerPortalCustomersGetPaymentMethodsResponse = {
  result: {
    items: [
      {
        id: "<id>",
        createdAt: new Date("2024-06-26T10:14:39.317Z"),
        default: false,
        card: {
          brand: "<value>",
          last4: "<value>",
          expMonth: 528166,
          expYear: 253592,
        },
      },
    ],
    pagination: {
      totalCount: 730873,
      maxPage: 44630,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |