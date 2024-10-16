# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-04-08T07:54:40.301Z"),
      modifiedAt: new Date("2024-05-30T02:30:37.371Z"),
      id: "<value>",
      userId: "<value>",
      views: 577297,
      clicks: 42783,
      imageUrl: "https://striking-polarisation.name/",
      imageUrlDark: "https://pessimistic-pants.name",
      text: "<value>",
      linkUrl: "https://small-futon.info",
    },
  ],
  pagination: {
    totalCount: 401449,
    maxPage: 209210,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |