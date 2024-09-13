# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-09-03T21:01:42.820Z"),
      modifiedAt: new Date("2024-06-28T05:51:26.565Z"),
      id: "<value>",
      userId: "<value>",
      views: 860552,
      clicks: 379034,
      imageUrl: "https://bulky-disposer.biz",
      imageUrlDark: "http://optimistic-avenue.info",
      text: "<value>",
      linkUrl: "http://likely-dignity.info",
    },
  ],
  pagination: {
    totalCount: 456141,
    maxPage: 524593,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |