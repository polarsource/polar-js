# CustomersUpdateRequest

## Example Usage

```typescript
import { CustomersUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: CustomersUpdateRequest = {
  id: "<value>",
  customerUpdate: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The customer ID.                                                       |
| `customerUpdate`                                                       | [components.CustomerUpdate](../../models/components/customerupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |