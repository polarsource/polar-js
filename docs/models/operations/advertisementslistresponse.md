# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-02-07T20:02:50.033Z"),
        modifiedAt: new Date("2025-03-02T22:52:48.220Z"),
        id: "<value>",
        imageUrl: "https://monumental-innovation.net/",
        imageUrlDark: "https://remorseful-smog.net/",
        text: "<value>",
        linkUrl: "https://livid-insolence.org/",
      },
    ],
    pagination: {
      totalCount: 435743,
      maxPage: 913584,
    },
    dimensions: [
      909641,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |