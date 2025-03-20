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
        createdAt: new Date("2024-11-19T05:59:53.949Z"),
        default: false,
      },
    ],
    pagination: {
      totalCount: 956371,
      maxPage: 169754,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |