# CustomersMembersUpdateExternalRequest

## Example Usage

```typescript
import { CustomersMembersUpdateExternalRequest } from "@polar-sh/sdk/models/operations/customersmembersupdateexternal.js";

let value: CustomersMembersUpdateExternalRequest = {
  externalId: "<id>",
  memberExternalId: "<id>",
  memberUpdate: {
    name: "Jane Doe",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `externalId`                                                       | *string*                                                           | :heavy_check_mark:                                                 | The customer external ID.                                          |
| `memberExternalId`                                                 | *string*                                                           | :heavy_check_mark:                                                 | The member external ID.                                            |
| `memberUpdate`                                                     | [components.MemberUpdate](../../models/components/memberupdate.md) | :heavy_check_mark:                                                 | N/A                                                                |