# OrganizationAccessTokenCreate

## Example Usage

```typescript
import { OrganizationAccessTokenCreate } from "@polar-sh/sdk/models/components/organizationaccesstokencreate.js";

let value: OrganizationAccessTokenCreate = {
  comment:
    "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
  scopes: [
    "refunds:write",
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `organizationId`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `comment`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `expiresIn`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `scopes`                                                                 | [components.AvailableScope](../../models/components/availablescope.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |