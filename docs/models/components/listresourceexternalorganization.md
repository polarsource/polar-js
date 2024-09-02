# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
    items: [
        {
            id: "3789fd87-1f99-4dd2-afd1-21aa6f1e674b",
            name: "<value>",
            avatarUrl: "<value>",
            isPersonal: false,
            bio: "<value>",
            prettyName: "<value>",
            company: "Roberts, Bartoletti and Hackett",
            blog: "<value>",
            location: "<value>",
            email: "Blake.Hermiston@hotmail.com",
            twitterUsername: "<value>",
            organizationId: "<value>",
        },
    ],
    pagination: {
        totalCount: 391774,
        maxPage: 16328,
    },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |