# MemberSessionCreate

Schema for creating a member session using a member ID.

## Example Usage

```typescript
import { MemberSessionCreate } from "@polar-sh/sdk/models/components/membersessioncreate.js";

let value: MemberSessionCreate = {
  memberId: "<value>",
  returnUrl: "https://example.com/account",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `memberId`                                                                          | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the member to create a session for.                                           |                                                                                     |
| `returnUrl`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | When set, a back button will be shown in the customer portal to return to this URL. | https://example.com/account                                                         |