# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-09-16T20:31:11.067Z"),
      modifiedAt: new Date("2024-12-02T07:40:27.372Z"),
      id: "<value>",
      userId: "<value>",
      views: 343605,
      clicks: 960835,
      imageUrl: "https://untrue-handicap.net",
      imageUrlDark: "http://glass-gray.com",
      text: "<value>",
      linkUrl: "http://illegal-scholarship.biz",
    },
  ],
  pagination: {
    totalCount: 926213,
    maxPage: 132487,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |