# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components/advertisementcampaignlistresource.js";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2025-12-04T07:40:55.524Z"),
      modifiedAt: new Date("2025-12-05T19:52:32.444Z"),
      id: "<value>",
      imageUrl: "https://tense-ferret.org",
      imageUrlDark: "https://fearless-commercial.net",
      text: "<value>",
      linkUrl: "https://celebrated-guard.biz",
    },
  ],
  pagination: {
    totalCount: 660691,
    maxPage: 420405,
  },
  dimensions: [
    648676,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |