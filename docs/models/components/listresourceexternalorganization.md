# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "e8a148e7-90f7-4258-823e-d14a40b35422",
      name: "<value>",
      avatarUrl: "https://severe-tusk.name",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Cruickshank - Kub",
      blog: "<value>",
      location: "<value>",
      email: "Orion_Dietrich@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 42469,
    maxPage: 369181,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |