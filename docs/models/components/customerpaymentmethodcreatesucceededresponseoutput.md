# CustomerPaymentMethodCreateSucceededResponseOutput

## Example Usage

```typescript
import { CustomerPaymentMethodCreateSucceededResponseOutput } from "@polar-sh/sdk/models/components/customerpaymentmethodcreatesucceededresponseoutput.js";

let value: CustomerPaymentMethodCreateSucceededResponseOutput = {
  status: "succeeded",
  paymentMethod: {
    id: "<value>",
    createdAt: new Date("2024-11-15T20:39:26.296Z"),
    modifiedAt: new Date("2025-01-26T13:09:14.316Z"),
    processor: "stripe",
    customerId: "<value>",
    type: "<value>",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `status`                           | *string*                           | :heavy_check_mark:                 | N/A                                |
| `paymentMethod`                    | *components.CustomerPaymentMethod* | :heavy_check_mark:                 | N/A                                |