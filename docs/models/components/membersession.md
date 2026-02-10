# MemberSession

A member session that can be used to authenticate as a member in the customer portal.

## Example Usage

```typescript
import { MemberSession } from "@polar-sh/sdk/models/components/membersession.js";

let value: MemberSession = {
  createdAt: new Date("2026-02-26T15:52:36.774Z"),
  modifiedAt: new Date("2024-09-10T05:20:00.276Z"),
  id: "<value>",
  token: "<value>",
  expiresAt: new Date("2026-07-27T15:13:12.034Z"),
  returnUrl: "https://trivial-footrest.info",
  memberPortalUrl: "https://crooked-extent.name",
  memberId: "<value>",
  member: {
    id: "<value>",
    createdAt: new Date("2026-04-15T16:04:23.824Z"),
    modifiedAt: new Date("2025-04-16T17:12:33.507Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "member",
  },
  customerId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `token`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `returnUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `memberPortalUrl`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `memberId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.Member](../../models/components/member.md)                                        | :heavy_check_mark:                                                                            | A member of a customer.                                                                       |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customer`                                                                                    | [components.Customer](../../models/components/customer.md)                                    | :heavy_check_mark:                                                                            | A customer in an organization.                                                                |