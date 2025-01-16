# ListResourceCustomerOrder

## Example Usage

```typescript
import { ListResourceCustomerOrder } from "@polar-sh/sdk/models/components";

let value: ListResourceCustomerOrder = {
  items: [
    {
      createdAt: new Date("2024-05-04T01:16:52.859Z"),
      modifiedAt: new Date("2023-09-25T23:16:09.807Z"),
      id: "<value>",
      amount: 252366,
      taxAmount: 416180,
      currency: "Dobra",
      customerId: "<value>",
      productId: "<value>",
      productPriceId: "<value>",
      subscriptionId: "<value>",
      userId: "<value>",
      product: {
        createdAt: new Date("2024-09-07T09:12:50.878Z"),
        modifiedAt: new Date("2024-09-24T18:14:41.086Z"),
        id: "<value>",
        name: "<value>",
        description:
          "knavishly forenenst although inculcate gee blah scorn before fooey to",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-05-01T14:52:11.399Z"),
            modifiedAt: new Date("2023-06-02T19:45:56.779Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-30T18:08:12.857Z"),
            modifiedAt: new Date("2025-10-20T08:31:50.564Z"),
            id: "<value>",
            type: "downloadables",
            description: "knowledgeably limply cleaner suspiciously phooey",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Applications",
            mimeType: "<value>",
            size: 743570,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-31T06:40:04.841Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-06-15T14:20:39.051Z"),
            sizeReadable: "<value>",
            publicUrl: "https://private-intent.info",
          },
        ],
        organization: {
          createdAt: new Date("2024-01-13T20:12:26.528Z"),
          modifiedAt: new Date("2024-02-12T01:50:20.635Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: "https://humiliating-aftermath.com",
          bio: "<value>",
          company: "Cummerata and Sons",
          blog: "<value>",
          location: "<value>",
          email: "Estelle.Beahan@hotmail.com",
          twitterUsername: "<value>",
          pledgeMinimumAmount: 826417,
          pledgeBadgeShowAmount: false,
          defaultUpfrontSplitToContributors: 399210,
          profileSettings: {},
          featureSettings: {},
        },
      },
      productPrice: {
        createdAt: new Date("2024-12-28T08:37:43.251Z"),
        modifiedAt: new Date("2023-08-05T03:46:27.102Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 38811,
        maximumAmount: 246670,
        presetAmount: 101232,
      },
      subscription: {
        createdAt: new Date("2025-02-09T02:59:02.423Z"),
        modifiedAt: new Date("2024-09-15T20:54:29.196Z"),
        id: "<value>",
        amount: 793689,
        currency: "Iranian Rial",
        recurringInterval: "month",
        status: "unpaid",
        currentPeriodStart: new Date("2024-09-11T19:42:53.732Z"),
        currentPeriodEnd: new Date("2024-06-02T07:07:47.859Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-09-03T21:54:21.511Z"),
        startedAt: new Date("2024-01-17T04:51:42.001Z"),
        endsAt: new Date("2024-03-24T03:45:48.595Z"),
        endedAt: new Date("2023-10-10T03:49:19.883Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "low_quality",
        customerCancellationComment: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 570896,
    maxPage: 921343,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.CustomerOrder](../../models/components/customerorder.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |