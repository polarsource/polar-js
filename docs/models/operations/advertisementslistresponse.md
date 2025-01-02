# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-02T16:15:14.675Z"),
        modifiedAt: new Date("2025-04-12T07:16:10.826Z"),
        id: "<value>",
        imageUrl: "https://stale-zen.net",
        imageUrlDark: "https://rundown-reward.info",
        text: "<value>",
        linkUrl: "https://elastic-airbus.net/",
      },
    ],
    pagination: {
      totalCount: 349556,
      maxPage: 758592,
    },
    dimensions: [
      130229,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |