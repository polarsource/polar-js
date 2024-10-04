# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-28T20:28:23.222Z"),
        modifiedAt: new Date("2022-06-04T11:44:43.665Z"),
        id: "<value>",
        imageUrl: "https://total-ocelot.com",
        imageUrlDark: "https://unwilling-lieu.info",
        text: "<value>",
        linkUrl: "https://slimy-swordfish.com/",
      },
    ],
    pagination: {
      totalCount: 758985,
      maxPage: 17060,
    },
    dimensions: [
      967055,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |