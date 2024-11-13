# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-11-26T12:19:41.082Z"),
        modifiedAt: new Date("2024-05-27T16:12:22.860Z"),
        id: "<value>",
        imageUrl: "https://lined-place.com",
        imageUrlDark: "https://frail-whack.com/",
        text: "<value>",
        linkUrl: "https://average-finding.biz/",
      },
    ],
    pagination: {
      totalCount: 946808,
      maxPage: 845154,
    },
    dimensions: [
      382764,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |