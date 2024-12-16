# CheckoutsCustomListResponse

## Example Usage

```typescript
import { CheckoutsCustomListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutsCustomListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-16T19:44:40.318Z"),
        modifiedAt: new Date("2022-09-27T13:10:46.158Z"),
        id: "<value>",
        status: "failed",
        clientSecret: "<value>",
        url: "https://prickly-wheel.name",
        expiresAt: new Date("2024-07-29T12:36:50.656Z"),
        successUrl: "https://well-groomed-freckle.com/",
        embedOrigin: "<value>",
        amount: 155134,
        taxAmount: 633452,
        currency: "Swedish Krona",
        subtotalAmount: 54726,
        totalAmount: 469513,
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
        customerEmail: "Julie.Dare33@hotmail.com",
        customerIpAddress: "<value>",
        customerBillingAddress: {
          country: "Guatemala",
        },
        customerTaxId: "<id>",
        paymentProcessorMetadata: {},
        metadata: {
          "key": "<value>",
        },
        product: {
          createdAt: new Date("2022-09-05T17:12:33.321Z"),
          modifiedAt: new Date("2023-07-19T18:53:24.110Z"),
          id: "<value>",
          name: "<value>",
          description:
            "zealous warming accurate jubilant trust pish likable er upwardly drat",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-21T20:13:49.892Z"),
              modifiedAt: new Date("2023-08-20T19:56:45.630Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-11-03T09:06:30.437Z"),
              modifiedAt: new Date("2022-10-15T12:25:54.318Z"),
              id: "<value>",
              type: "custom",
              description:
                "anenst pip deceivingly whoever tomatillo what puff woot dicker testimonial",
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
              path: "/boot",
              mimeType: "<value>",
              size: 523917,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-01-04T03:36:40.213Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-10-25T00:03:32.852Z"),
              sizeReadable: "<value>",
              publicUrl: "https://infamous-information.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-07-15T01:14:05.609Z"),
          modifiedAt: new Date("2022-03-11T12:23:21.693Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 713296,
          maximumAmount: 534321,
          presetAmount: 973569,
        },
        discount: {
          duration: "forever",
          durationInMonths: 372457,
          type: "percentage",
          basisPoints: 458447,
          id: "<value>",
          name: "<value>",
          code: "<value>",
        },
        subscriptionId: "<value>",
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-11-30T04:17:34.104Z"),
              modifiedAt: new Date("2022-04-10T08:39:34.010Z"),
              id: "<value>",
              metadata: {
                "key": 677590,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 219370,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 586095,
      maxPage: 774950,
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `result`                                                                           | [components.ListResourceCheckout](../../models/components/listresourcecheckout.md) | :heavy_check_mark:                                                                 | N/A                                                                                |