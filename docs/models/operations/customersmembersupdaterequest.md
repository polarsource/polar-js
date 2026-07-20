# CustomersMembersUpdateRequest

## Example Usage

```typescript
import { CustomersMembersUpdateRequest } from "@polar-sh/sdk/models/operations/customersmembersupdate.js";

let value: CustomersMembersUpdateRequest = {
  id: "<value>",
  memberId: "657f9c6b-7166-4fc1-986a-4b658ea14fff",
  memberUpdate: {
    name: "Jane Doe",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | The customer ID.                                                   |
| `memberId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `memberUpdate`                                                     | [components.MemberUpdate](../../models/components/memberupdate.md) | :heavy_check_mark:                                                 | N/A                                                                |