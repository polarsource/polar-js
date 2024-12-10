# AdvertisementsListResponse

## Example Usage

```typescript
import { AdvertisementsListResponse } from "@polar-sh/sdk/models/operations";

let value: AdvertisementsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-05-03T17:37:17.258Z"),
        modifiedAt: new Date("2024-10-26T13:51:57.176Z"),
        id: "<value>",
        imageUrl: "https://hefty-larva.name",
        imageUrlDark: "https://sticky-filter.com/",
        text: "<value>",
        linkUrl: "https://quiet-divine.org/",
      },
    ],
    pagination: {
      totalCount: 772432,
      maxPage: 115208,
    },
    dimensions: [
      555281,
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.AdvertisementCampaignListResource](../../models/components/advertisementcampaignlistresource.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |