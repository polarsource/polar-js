# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-12-04T16:08:03.432Z"),
      modifiedAt: new Date("2023-11-11T23:33:24.251Z"),
      id: "<value>",
      userId: "<value>",
      views: 533428,
      clicks: 757747,
      imageUrl: "https://little-guide.biz/",
      imageUrlDark: "https://babyish-fencing.info/",
      text: "<value>",
      linkUrl: "https://electric-digit.biz/",
    },
  ],
  pagination: {
    totalCount: 350222,
    maxPage: 144876,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |