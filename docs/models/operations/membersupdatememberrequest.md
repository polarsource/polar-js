# MembersUpdateMemberRequest

## Example Usage

```typescript
import { MembersUpdateMemberRequest } from "@polar-sh/sdk/models/operations/membersupdatemember.js";

let value: MembersUpdateMemberRequest = {
  id: "c1e73abb-3532-43a0-a435-679b3e166928",
  memberUpdate: {
    name: "Jane Doe",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `memberUpdate`                                                     | [components.MemberUpdate](../../models/components/memberupdate.md) | :heavy_check_mark:                                                 | N/A                                                                |