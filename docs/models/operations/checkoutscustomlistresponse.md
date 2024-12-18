# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-09-12T09:34:25.858Z"),
        modifiedAt: new Date("2024-07-24T20:28:30.681Z"),
        id: "<value>",
        status: "confirmed",
        clientSecret: "<value>",
        url: "https://polite-cheese.biz",
        expiresAt: new Date("2022-10-15T09:56:03.023Z"),
        successUrl: "https://glossy-tabletop.name",
        embedOrigin: "<value>",
        amount: 708312,
        taxAmount: 280480,
        currency: "Australian Dollar",
        subtotalAmount: 453892,
        totalAmount: 640611,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        allowDiscountCodes: false,
        isDiscountApplicable: false,
        isFreeProductPrice: false,
        isPaymentRequired: false,
        isPaymentSetupRequired: false,
        isPaymentFormRequired: false,
        customerId: "<value>",
        customerName: "<value>",
        customerEmail: "Vaughn_Ziemann51@yahoo.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Nigeria",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2023-03-21T15:39:41.594Z"),
          modifiedAt: new Date("2023-06-25T23:14:48.977Z"),
          id: "<value>",
          name: "<value>",
          description: "captain though propound ick exotic frozen",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-04-20T02:33:09.911Z"),
              modifiedAt: new Date("2022-06-20T00:38:57.696Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 633452,
              maximumAmount: 757185,
              presetAmount: 54726,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-05-30T14:03:31.641Z"),
              modifiedAt: new Date("2024-05-09T11:46:57.173Z"),
              id: "<value>",
              type: "github_repository",
              description:
                "furthermore stranger than which notwithstanding following",
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
              path: "/var/yp",
              mimeType: "<value>",
              size: 936974,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-07-24T01:54:16.556Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-04-17T23:23:59.287Z"),
              sizeReadable: "<value>",
              publicUrl: "https://agreeable-kinase.net/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-10-01T21:33:32.957Z"),
          modifiedAt: new Date("2024-09-28T16:24:17.935Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "forever",
          durationInMonths: 814214,
          type: "fixed",
          amount: 150561,
          currency: "Comoro Franc",
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2022-04-04T12:19:00.646Z"),
              modifiedAt: new Date("2023-01-20T01:15:53.582Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 926475,
            required: false,
          },
        ],
        customerMetadata: {
          "key": false,
        },
      },
    ],
    pagination: {
      totalCount: 571683,
      maxPage: 105895,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |