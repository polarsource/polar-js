# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2022-07-06T20:17:06.814Z"),
      modifiedAt: new Date("2024-05-28T20:24:06.201Z"),
      id: "<value>",
      userId: "<value>",
      views: 438477,
      clicks: 276945,
      imageUrl: "https://stingy-morbidity.net",
      imageUrlDark: "https://rectangular-fen.net/",
      text: "<value>",
      linkUrl: "https://sparse-membership.net",
    },
  ],
  pagination: {
    totalCount: 468332,
    maxPage: 279945,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |