# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-04T10:00:03.073Z"),
        modifiedAt: new Date("2023-07-10T04:52:57.046Z"),
        id: "<value>",
        imageUrl: "https://defensive-accompanist.biz/",
        imageUrlDark: "https://yellow-handover.org",
        text: "<value>",
        linkUrl: "https://warped-affect.com/",
      },
    ],
    pagination: {
      totalCount: 362069,
      maxPage: 875316,
    },
    dimensions: [
      566925,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |