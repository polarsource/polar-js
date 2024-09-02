# ListResourceOrganization

## Example Usage

```typescript
import { ListResourceOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceOrganization = {
    items: [
        {
            createdAt: new Date("2023-02-27T05:17:06.651Z"),
            modifiedAt: new Date("2022-03-05T23:00:19.753Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "<value>",
            bio: "<value>",
            company: "Renner, Bruen and Tillman",
            blog: "<value>",
            location: "<value>",
            email: "Donnie.Cole@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 374296,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 324405,
            donationsEnabled: false,
            profileSettings: {},
            featureSettings: {},
        },
    ],
    pagination: {
        totalCount: 748789,
        maxPage: 680116,
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.OrganizationOutput](../../models/components/organizationoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |