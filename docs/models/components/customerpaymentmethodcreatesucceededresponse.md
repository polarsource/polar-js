# CustomerPaymentMethodCreateSucceededResponse

## Example Usage

```typescript
import { CustomerPaymentMethodCreateSucceededResponse } from "@polar-sh/sdk/models/components/customerpaymentmethodcreatesucceededresponse.js";

let value: CustomerPaymentMethodCreateSucceededResponse = {
  status: "succeeded",
  paymentMethod: {
    id: "<value>",
    createdAt: new Date("2025-10-23T19:49:37.911Z"),
    modifiedAt: new Date("2024-09-25T15:17:52.236Z"),
    processor: "stripe",
    customerId: "<value>",
    type: "card",
    methodMetadata: {
      brand: "<value>",
      last4: "<value>",
      expMonth: 438108,
      expYear: 447179,
    },
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `status`                           | *"succeeded"*                      | :heavy_check_mark:                 | N/A                                |
| `paymentMethod`                    | *components.CustomerPaymentMethod* | :heavy_check_mark:                 | N/A                                |