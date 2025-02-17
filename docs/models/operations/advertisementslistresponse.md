# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-06T20:33:57.388Z"),
        modifiedAt: new Date("2023-03-29T04:02:08.271Z"),
        id: "<value>",
        imageUrl: "https://winding-tinderbox.com",
        imageUrlDark: "https://celebrated-haircut.info/",
        text: "<value>",
        linkUrl: "https://sorrowful-follower.info/",
      },
    ],
    pagination: {
      totalCount: 297223,
      maxPage: 286550,
    },
    dimensions: [
      419990,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |