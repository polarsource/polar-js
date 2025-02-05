# CheckoutsUpdateRequest

## Example Usage

```typescript
import { CheckoutsUpdateRequest } from "@polar-sh/sdk/models/operations/checkoutsupdate.js";

let value: CheckoutsUpdateRequest = {
  id: "<value>",
  checkoutUpdate: {},
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The checkout session ID.                                               |
| `checkoutUpdate`                                                       | [components.CheckoutUpdate](../../models/components/checkoutupdate.md) | :heavy_check_mark:                                                     | N/A                                                                    |