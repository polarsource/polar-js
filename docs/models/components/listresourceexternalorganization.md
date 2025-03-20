# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "41cf2a00-cd57-4cd4-9c37-ba8a04313de8",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://whimsical-tusk.biz/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Becker - Herzog",
      blog: "<value>",
      location: "<value>",
      email: "Dell48@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  ],
  pagination: {
    totalCount: 945188,
    maxPage: 887672,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |