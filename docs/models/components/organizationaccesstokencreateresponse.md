# OrganizationAccessTokenCreateResponse

## Example Usage

```typescript
import { OrganizationAccessTokenCreateResponse } from "@polar-sh/sdk/models/components/organizationaccesstokencreateresponse.js";

let value: OrganizationAccessTokenCreateResponse = {
  organizationAccessToken: {
    createdAt: new Date("2025-10-28T13:14:30.150Z"),
    modifiedAt: new Date("2025-04-22T02:22:39.546Z"),
    id: "<value>",
    scopes: [],
    expiresAt: new Date("2024-03-16T02:29:04.755Z"),
    comment:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    lastUsedAt: new Date("2024-10-03T22:02:09.913Z"),
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  token: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `organizationAccessToken`                                                                | [components.OrganizationAccessToken](../../models/components/organizationaccesstoken.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `token`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |