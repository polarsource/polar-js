# OrganizationsListResponse

## Example Usage

```typescript
import { OrganizationsListResponse } from "@polar-sh/sdk/models/operations/organizationslist.js";

let value: OrganizationsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-09T05:23:52.543Z"),
        modifiedAt: new Date("2023-11-21T16:59:04.853Z"),
        id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        name: "<value>",
        slug: "<value>",
        avatarUrl: "https://wasteful-finger.com",
        email: "Aiden.Fritsch61@hotmail.com",
        website: "<value>",
        socials: [
          {
            platform: "github",
            url: "https://frozen-someplace.biz/",
          },
        ],
        detailsSubmittedAt: new Date("2023-08-24T00:17:11.589Z"),
        featureSettings: {},
        subscriptionSettings: {
          allowMultipleSubscriptions: false,
          allowCustomerUpdates: false,
          prorationBehavior: "prorate",
        },
      },
    ],
    pagination: {
      totalCount: 935270,
      maxPage: 766562,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceOrganization](../../models/components/listresourceorganization.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |