# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2022-01-31T08:54:12.797Z"),
      modifiedAt: new Date("2022-11-30T13:55:43.213Z"),
      id: "<value>",
      userId: "<value>",
      views: 520811,
      clicks: 650319,
      imageUrl: "https://downright-metal.net/",
      imageUrlDark: "https://timely-dividend.name",
      text: "<value>",
      linkUrl: "https://gloomy-pocket-watch.com/",
    },
  ],
  pagination: {
    totalCount: 805149,
    maxPage: 36619,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |