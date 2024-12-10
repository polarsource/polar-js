# AdvertisementCampaignListResource

## Example Usage

```typescript
import { AdvertisementCampaignListResource } from "@polar-sh/sdk/models/components";

let value: AdvertisementCampaignListResource = {
  items: [
    {
      createdAt: new Date("2022-08-11T18:26:01.453Z"),
      modifiedAt: new Date("2024-10-11T05:31:23.796Z"),
      id: "<value>",
      imageUrl: "https://intrepid-scholarship.org/",
      imageUrlDark: "https://some-charm.biz/",
      text: "<value>",
      linkUrl: "https://variable-carboxyl.com",
    },
  ],
  pagination: {
    totalCount: 975228,
    maxPage: 91236,
  },
  dimensions: [
    42895,
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.AdvertisementCampaign](../../models/components/advertisementcampaign.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `dimensions`                                                                           | *number*[]                                                                             | :heavy_check_mark:                                                                     | The dimensions (width, height) in pixels of the advertisement images.                  |