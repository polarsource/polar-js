# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components/listresourceexternalorganization.js";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "2e709715-9ae7-4116-82e3-685a9fd97994",
      platform: "github",
      name: "<value>",
      avatarUrl: "https://funny-goodwill.com",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Beer, Rice and Durgan",
      blog: "<value>",
      location: "<value>",
      email: "Layne50@gmail.com",
      twitterUsername: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
  ],
  pagination: {
    totalCount: 375389,
    maxPage: 129469,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |