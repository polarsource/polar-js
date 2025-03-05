# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "5c051f27-7c4b-40e1-b725-a24ad9812f07",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://lawful-kettledrum.biz/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Walsh, Rohan and Altenwerth",
      blog: "<value>",
      location: "<value>",
      email: "Darion_Deckow44@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  ],
  pagination: {
    totalCount: 932641,
    maxPage: 239223,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |