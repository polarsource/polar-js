# PaymentMethodGeneric

## Example Usage

```typescript
import { PaymentMethodGeneric } from "@polar-sh/sdk/models/components/paymentmethodgeneric.js";

let value: PaymentMethodGeneric = {
  id: "<value>",
  createdAt: new Date("2025-04-30T09:20:24.064Z"),
  modifiedAt: new Date("2024-10-03T20:55:19.525Z"),
  processor: "stripe",
  customerId: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `processor`                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |