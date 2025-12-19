# MembersListMembersResponse

## Example Usage

```typescript
import { MembersListMembersResponse } from "@polar-sh/sdk/models/operations/memberslistmembers.js";

let value: MembersListMembersResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2025-03-19T10:22:58.062Z"),
        modifiedAt: new Date("2024-10-25T21:40:50.948Z"),
        customerId: "<value>",
        email: "member@example.com",
        name: "Jane Doe",
        externalId: "usr_1337",
        role: "billing_manager",
      },
    ],
    pagination: {
      totalCount: 296266,
      maxPage: 544155,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceMember](../../models/components/listresourcemember.md) | :heavy_check_mark:                                                             | N/A                                                                            |