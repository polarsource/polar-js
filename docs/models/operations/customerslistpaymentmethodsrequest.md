# CustomersListPaymentMethodsRequest

## Example Usage

```typescript
import { CustomersListPaymentMethodsRequest } from "@polar-sh/sdk/models/operations/customerslistpaymentmethods.js";

let value: CustomersListPaymentMethodsRequest = {
  id: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_check_mark:                              | The customer ID.                                |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |