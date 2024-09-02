# SubscriptionCreateEmail

Request schema for creating a subscription by email.

## Example Usage

```typescript
import { SubscriptionCreateEmail } from "@polar-sh/sdk/models/components";

let value: SubscriptionCreateEmail = {
    email: "Isabella51@gmail.com",
    productId: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `email`                                                        | *string*                                                       | :heavy_check_mark:                                             | The email address of the user.                                 |
| `productId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The ID of the product. **Must be the free subscription tier**. |