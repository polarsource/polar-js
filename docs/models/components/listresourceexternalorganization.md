# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "42d48215-5595-4c15-9a91-74a2a74b320d",
      name: "<value>",
      avatarUrl: "https://classic-bungalow.info",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Prohaska Inc",
      blog: "<value>",
      location: "<value>",
      email: "Gavin32@hotmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 857355,
    maxPage: 236455,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |