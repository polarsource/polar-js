# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2022-03-16T23:12:57.117Z"),
      modifiedAt: new Date("2024-12-22T15:39:21.636Z"),
      id: "<value>",
      imageUrl: "https://trivial-ostrich.biz",
      imageUrlDark: "https://awesome-moment.info",
      text: "<value>",
      linkUrl: "https://alienated-governance.info",
    },
  ],
  pagination: {
    totalCount: 152359,
    maxPage: 414720,
  },
  dimensions: [
    910478,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |