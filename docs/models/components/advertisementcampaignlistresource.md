# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2023-03-22T18:22:15.432Z"),
      modifiedAt: new Date("2023-02-03T19:47:42.976Z"),
      id: "<value>",
      imageUrl: "https://burly-cappelletti.biz",
      imageUrlDark: "https://serpentine-teriyaki.biz",
      text: "<value>",
      linkUrl: "https://memorable-essence.org/",
    },
  ],
  pagination: {
    totalCount: 39842,
    maxPage: 190895,
  },
  dimensions: [
    753559,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |