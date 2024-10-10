# CheckoutsCustomUpdateRequest

## Example Usage

```typescript
import { CheckoutsCustomUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomUpdateRequest = {
  id: "<value>",
  checkoutUpdate: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The checkout session ID.                                               |
| `checkoutUpdate`                                                       | [components.CheckoutUpdate](../../models/components/checkoutupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |