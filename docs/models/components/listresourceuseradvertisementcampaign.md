# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-06-11T03:31:17.736Z"),
      modifiedAt: new Date("2023-07-27T07:18:50.610Z"),
      id: "<value>",
      userId: "<value>",
      views: 853606,
      clicks: 889448,
      imageUrl: "https://portly-cannon.info/",
      imageUrlDark: "https://giving-jacket.net/",
      text: "<value>",
      linkUrl: "https://uncomfortable-reboot.biz/",
    },
  ],
  pagination: {
    totalCount: 939161,
    maxPage: 506312,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |