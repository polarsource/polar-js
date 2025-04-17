# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components/listresourceorganization.js";

let value: ListResourceOrganization = {
  items: [
    {
      createdAt: new Date("2025-02-09T09:35:20.555Z"),
      modifiedAt: new Date("2024-10-31T04:26:04.861Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://key-incandescence.net/",
      email: "Alison_Carter@hotmail.com",
      website: "<value>",
      socials: [
        {
          platform: "other",
          url: "https://frightened-sundae.com",
        },
      ],
      detailsSubmittedAt: new Date("2025-05-28T00:41:39.380Z"),
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  ],
  pagination: {
    totalCount: 53217,
    maxPage: 47105,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Organization](../../models/components/organization.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |