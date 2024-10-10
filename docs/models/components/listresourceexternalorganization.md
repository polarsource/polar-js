# ListResourceExternalOrganization

## Example Usage

```typescript
import { ListResourceExternalOrganization } from "@polar-sh/sdk/models/components";

let value: ListResourceExternalOrganization = {
  items: [
    {
      id: "3b7ac976-82ce-4cdd-a2fa-6e9fc5bb5e25",
      name: "<value>",
      avatarUrl: "https://remorseful-yogurt.com/",
      isPersonal: false,
      bio: "<value>",
      prettyName: "<value>",
      company: "Schumm, Grady and Funk",
      blog: "<value>",
      location: "<value>",
      email: "Glennie81@yahoo.com",
      twitterUsername: "<value>",
      organizationId: "<value>",
    },
  ],
  pagination: {
    totalCount: 666762,
    maxPage: 288130,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `items`                                                                              | [components.ExternalOrganization](../../models/components/externalorganization.md)[] | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `pagination`                                                                         | [components.Pagination](../../models/components/pagination.md)                       | :heavy_check_mark:                                                                   | N/A                                                                                  |