# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-02-06T04:23:11.388Z"),
        modifiedAt: new Date("2024-05-14T04:28:07.813Z"),
        id: "<value>",
        imageUrl: "https://gifted-lay.net/",
        imageUrlDark: "https://altruistic-exasperation.com",
        text: "<value>",
        linkUrl: "https://salty-dream.net",
      },
    ],
    pagination: {
      totalCount: 633380,
      maxPage: 660131,
    },
    dimensions: [
      750430,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |