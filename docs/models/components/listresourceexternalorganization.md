# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "23985056-cb33-4aa8-a140-cce1eefc44ba",
      name: "<value>",
      avatarUrl: "https://miserable-ethyl.name/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Price, Kemmer and Leffler",
      blog: "<value>",
      location: "<value>",
      email: "Darlene.Kuhic@hotmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 417741,
    maxPage: 576380,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |