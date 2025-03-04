# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "99428460-a0b3-429f-96d0-8a6206bf7451",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://posh-adrenalin.name",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Kuvalis and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Roy88@gmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 450484,
    maxPage: 378023,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |