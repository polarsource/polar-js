# CustomersListPaymentMethodsExternalRequest

## Example Usage

```typescript
import { CustomersListPaymentMethodsExternalRequest } from "@polar-sh/sdk/models/operations/customerslistpaymentmethodsexternal.js";

let value: CustomersListPaymentMethodsExternalRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `externalId`                                    | *string*                                        | :heavy_check_mark:                              | The customer external ID.                       |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |