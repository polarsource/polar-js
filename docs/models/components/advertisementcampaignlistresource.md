# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2024-09-26T20:47:30.377Z"),
      modifiedAt: new Date("2024-02-10T05:09:54.223Z"),
      id: "<value>",
      imageUrl: "https://vain-pine.biz",
      imageUrlDark: "https://innocent-precedent.info",
      text: "<value>",
      linkUrl: "https://black-clavicle.biz",
    },
  ],
  pagination: {
    totalCount: 221000,
    maxPage: 235427,
  },
  dimensions: [
    152850,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |