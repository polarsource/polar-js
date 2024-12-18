# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-11-20T21:08:23.770Z"),
      modifiedAt: new Date("2023-07-29T08:38:01.905Z"),
      id: "<value>",
      imageUrl: "https://damp-pupil.name/",
      imageUrlDark: "https://extra-large-daughter.info/",
      text: "<value>",
      linkUrl: "https://forsaken-recommendation.name/",
    },
  ],
  pagination: {
    totalCount: 818596,
    maxPage: 744825,
  },
  dimensions: [
    21277,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |