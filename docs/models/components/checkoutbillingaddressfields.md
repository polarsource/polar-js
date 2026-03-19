# CheckoutBillingAddressFields

## Example Usage

```typescript
import { CheckoutBillingAddressFields } from "@polar-sh/sdk/models/components/checkoutbillingaddressfields.js";

let value: CheckoutBillingAddressFields = {
  country: "required",
  state: "optional",
  city: "optional",
  postalCode: "optional",
  line1: "disabled",
  line2: "optional",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `country`                                                                                | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `state`                                                                                  | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `city`                                                                                   | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `postalCode`                                                                             | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `line1`                                                                                  | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `line2`                                                                                  | [components.BillingAddressFieldMode](../../models/components/billingaddressfieldmode.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |