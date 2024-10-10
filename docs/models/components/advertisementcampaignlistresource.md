# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2023-07-11T03:19:08.621Z"),
      modifiedAt: new Date("2024-01-18T21:54:07.604Z"),
      id: "<value>",
      imageUrl: "https://awful-swim.biz",
      imageUrlDark: "https://oblong-finer.org",
      text: "<value>",
      linkUrl: "https://foolhardy-cow.info",
    },
  ],
  pagination: {
    totalCount: 332116,
    maxPage: 159757,
  },
  dimensions: [
    937408,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |