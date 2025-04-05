# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "569257e2-9302-45e0-b2dd-c2ff4e640858",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://fragrant-bob.net",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Olson - Waelchi",
      blog: "<value>",
      location: "<value>",
      email: "Dylan_Wilderman89@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  ],
  pagination: {
    totalCount: 258585,
    maxPage: 912963,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |