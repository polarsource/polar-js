# ListResourceCheckout

## Example Usage

```typescript
import { ListResourceCheckout } from "@polar-sh/sdk/models/components";

let value: ListResourceCheckout = {
  items: [
    {
      createdAt: new Date("2023-02-16T01:56:17.223Z"),
      modifiedAt: new Date("2024-09-26T12:45:07.280Z"),
      id: "<value>",
      status: "open",
      clientSecret: "<value>",
      url: "https://bustling-shark.biz/",
      expiresAt: new Date("2024-03-25T03:51:27.034Z"),
      successUrl: "https://sweet-yarmulke.com",
      embedOrigin: "<value>",
      amount: 150417,
      taxAmount: 636216,
      currency: "Kwanza",
      totalAmount: 817418,
      productId: "<value>",
      productPriceId: "<value>",
      isPaymentRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "Grayson20@yahoo.com",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Saint Vincent and the Grenadines",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {},
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2023-10-29T11:31:56.911Z"),
        modifiedAt: new Date("2022-09-16T16:37:59.200Z"),
        id: "<value>",
        name: "<value>",
        description:
          "widow consequently even because agreeable worth geez during",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2023-02-19T03:41:15.084Z"),
            modifiedAt: new Date("2023-12-03T01:24:28.573Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 776155,
            maximumAmount: 84703,
            presetAmount: 382479,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-18T23:11:42.440Z"),
            modifiedAt: new Date("2023-05-29T22:11:49.046Z"),
            id: "<value>",
            type: "downloadables",
            description: "blah boo daily ugh youthfully",
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
            path: "/private/tmp",
            mimeType: "<value>",
            size: 726243,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2022-04-16T16:09:45.798Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-07-08T09:44:17.770Z"),
            sizeReadable: "<value>",
            publicUrl: "https://clumsy-footrest.org",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2024-08-20T14:30:30.151Z"),
        modifiedAt: new Date("2022-12-07T01:45:08.619Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
      subscriptionId: "<value>",
    },
  ],
  pagination: {
    totalCount: 789945,
    maxPage: 96538,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `items`                                                                                              | [components.PolarCheckoutSchemasCheckout](../../models/components/polarcheckoutschemascheckout.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `pagination`                                                                                         | [components.Pagination](../../models/components/pagination.md)                                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |