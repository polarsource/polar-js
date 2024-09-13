# UserFreeSubscriptionCreate

## Example Usage

```typescript
import { UserFreeSubscriptionCreate } from "@polar-sh/sdk/models/components";

let value: UserFreeSubscriptionCreate = {
  productId: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `productId`                                                                               | *string*                                                                                  | :heavy_check_mark:                                                                        | ID of the free tier to subscribe to.                                                      |
| `customerEmail`                                                                           | *string*                                                                                  | :heavy_minus_sign:                                                                        | Email of the customer. This field is required if the API is called outside the Polar app. |