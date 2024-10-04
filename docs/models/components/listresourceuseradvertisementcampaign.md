# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2022-11-03T09:56:50.685Z"),
      modifiedAt: new Date("2024-08-15T19:04:20.048Z"),
      id: "<value>",
      userId: "<value>",
      views: 673158,
      clicks: 64184,
      imageUrl: "https://disloyal-toothbrush.com",
      imageUrlDark: "https://excitable-typeface.biz",
      text: "<value>",
      linkUrl: "https://common-invite.name",
    },
  ],
  pagination: {
    totalCount: 770696,
    maxPage: 557068,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |