# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2022-03-08T16:23:57.837Z"),
      modifiedAt: new Date("2022-11-19T12:26:23.096Z"),
      id: "<value>",
      userId: "<value>",
      views: 783637,
      clicks: 641914,
      imageUrl: "https://official-daddy.org/",
      imageUrlDark: "https://colossal-goodwill.info",
      text: "<value>",
      linkUrl: "https://same-sprinkles.com/",
    },
  ],
  pagination: {
    totalCount: 133223,
    maxPage: 283463,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |