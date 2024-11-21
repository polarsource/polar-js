# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2023-11-29T16:15:54.686Z"),
      modifiedAt: new Date("2023-05-29T12:27:54.010Z"),
      id: "<value>",
      imageUrl: "https://tidy-illusion.org/",
      imageUrlDark: "https://brave-bathhouse.org",
      text: "<value>",
      linkUrl: "https://outstanding-hose.com/",
    },
  ],
  pagination: {
    totalCount: 125551,
    maxPage: 212696,
  },
  dimensions: [
    605338,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |