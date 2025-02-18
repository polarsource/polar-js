# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "206bf745-17a9-40aa-88f4-d243ec760bfc",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://insidious-hamburger.biz/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Schaden, Quigley and Abshire",
      blog: "<value>",
      location: "<value>",
      email: "Eudora_Nienow@hotmail.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 861166,
    maxPage: 356508,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |