# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-14T01:14:05.609Z"),
        modifiedAt: new Date("2023-03-11T12:23:21.693Z"),
        id: "<value>",
        imageUrl: "https://mushy-volleyball.org",
        imageUrlDark: "https://honored-perp.info/",
        text: "<value>",
        linkUrl: "https://wilted-bookcase.name",
      },
    ],
    pagination: {
      totalCount: 677590,
      maxPage: 219370,
    },
    dimensions: [
      586095,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |