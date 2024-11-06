# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2023-03-04T12:05:11.807Z"),
      modifiedAt: new Date("2022-11-29T03:56:04.500Z"),
      id: "<value>",
      imageUrl: "https://lovely-sandbar.net/",
      imageUrlDark: "https://unfit-assist.org",
      text: "<value>",
      linkUrl: "https://digital-vision.net/",
    },
  ],
  pagination: {
    totalCount: 929724,
    maxPage: 523154,
  },
  dimensions: [
    747742,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |