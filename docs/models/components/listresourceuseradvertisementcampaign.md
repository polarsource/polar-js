# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
  items: [
    {
      createdAt: new Date("2023-07-17T14:02:10.568Z"),
      modifiedAt: new Date("2022-06-01T19:28:49.387Z"),
      id: "<value>",
      userId: "<value>",
      views: 196647,
      clicks: 915897,
      imageUrl: "https://clumsy-duster.name",
      imageUrlDark: "https://acceptable-premise.biz/",
      text: "<value>",
      linkUrl: "https://focused-circumference.com/",
    },
  ],
  pagination: {
    totalCount: 144913,
    maxPage: 967492,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |