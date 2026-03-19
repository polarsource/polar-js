# OrganizationAccessTokensListResponse

## Example Usage

```typescript
import { OrganizationAccessTokensListResponse } from "@polar-sh/sdk/models/operations/organizationaccesstokenslist.js";

let value: OrganizationAccessTokensListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2026-07-11T02:36:48.457Z"),
        modifiedAt: new Date("2024-03-30T21:46:14.206Z"),
        id: "<value>",
        scopes: [],
        expiresAt: new Date("2024-12-02T16:01:14.291Z"),
        comment:
          "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        lastUsedAt: new Date("2026-03-13T06:49:34.993Z"),
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [components.ListResourceOrganizationAccessToken](../../models/components/listresourceorganizationaccesstoken.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |