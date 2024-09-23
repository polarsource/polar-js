# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-17T02:48:20.581Z"),
        modifiedAt: new Date("2024-11-09T06:06:22.459Z"),
        id: "<value>",
        imageUrl: "https://sugary-thongs.net",
        imageUrlDark: "https://practical-guacamole.com/",
        text: "<value>",
        linkUrl: "https://far-flung-steeple.com/",
      },
    ],
    pagination: {
      totalCount: 958983,
      maxPage: 355369,
    },
    dimensions: [
      356707,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |