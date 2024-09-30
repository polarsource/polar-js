# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2022-12-15T15:28:10.903Z"),
      modifiedAt: new Date("2023-04-01T13:49:57.045Z"),
      id: "<value>",
      userId: "<value>",
      views: 93124,
      clicks: 14273,
      imageUrl: "https://boiling-embarrassment.name",
      imageUrlDark: "https://gloomy-pecan.info",
      text: "<value>",
      linkUrl: "https://inborn-allegation.org/",
    },
  ],
  pagination: {
    totalCount: 762184,
    maxPage: 339292,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |