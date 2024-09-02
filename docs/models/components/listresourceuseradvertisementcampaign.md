# ListResourceUserAdvertisementCampaign

## Example Usage

```typescript
import { ListResourceUserAdvertisementCampaign } from "@polar-sh/sdk/models/components";

let value: ListResourceUserAdvertisementCampaign = {
    items: [
        {
            createdAt: new Date("2024-04-04T08:08:46.901Z"),
            modifiedAt: new Date("2023-09-03T21:01:42.820Z"),
            id: "<value>",
            userId: "<value>",
            views: 829603,
            clicks: 860552,
            imageUrl: "http://scrawny-booty.biz",
            imageUrlDark: "http://compassionate-network.com",
            text: "<value>",
            linkUrl: "http://formal-keystone.biz",
        },
    ],
    pagination: {
        totalCount: 458515,
        maxPage: 456141,
    },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `items`                                                                                        | [components.UserAdvertisementCampaign](../../models/components/useradvertisementcampaign.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `pagination`                                                                                   | [components.Pagination](../../models/components/pagination.md)                                 | :heavy_check_mark:                                                                             | N/A                                                                                            |