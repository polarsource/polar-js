# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-09-27T18:33:14.332Z"),
        modifiedAt: new Date("2023-02-03T22:19:42.582Z"),
        id: "<value>",
        imageUrl: "https://celebrated-haircut.info/",
        imageUrlDark: "https://sorrowful-follower.info/",
        text: "<value>",
        linkUrl: "https://foolish-help.info/",
      },
    ],
    pagination: {
      totalCount: 515170,
      maxPage: 708899,
    },
    dimensions: [
      111771,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |