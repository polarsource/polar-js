# CustomerPortalCustomersListPaymentMethodsResponse

## Example Usage

```typescript
import { CustomerPortalCustomersListPaymentMethodsResponse } from "@polar-sh/sdk/models/operations/customerportalcustomerslistpaymentmethods.js";

let value: CustomerPortalCustomersListPaymentMethodsResponse = {
  result: {
    items: [],
    pagination: {
      totalCount: 47105,
      maxPage: 607201,
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                                                               | [components.ListResourceUnionPaymentMethodCardPaymentMethodGeneric](../../models/components/listresourceunionpaymentmethodcardpaymentmethodgeneric.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |