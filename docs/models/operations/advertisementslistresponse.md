# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations/advertisementslist.js";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-27T08:21:58.735Z"),
        modifiedAt: new Date("2025-09-11T09:59:17.332Z"),
        id: "<value>",
        imageUrl: "https://slight-clamp.net/",
        imageUrlDark: "https://acceptable-sarong.name/",
        text: "<value>",
        linkUrl: "https://pastel-department.biz",
      },
    ],
    pagination: {
      totalCount: 7413,
      maxPage: 912082,
    },
    dimensions: [
      438866,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |