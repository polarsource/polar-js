# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-07T04:20:42.318Z"),
        modifiedAt: new Date("2024-01-05T00:44:03.803Z"),
        id: "<value>",
        imageUrl: "https://self-assured-mentor.com/",
        imageUrlDark: "https://gaseous-release.info",
        text: "<value>",
        linkUrl: "https://dense-marimba.biz/",
      },
    ],
    pagination: {
      totalCount: 382070,
      maxPage: 785567,
    },
    dimensions: [
      555985,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |