# CustomerCreate


## Supported Types

### `components.CustomerIndividualCreate`

```typescript
const value: components.CustomerIndividualCreate = {
  externalId: "usr_1337",
  name: "John Doe",
  billingAddress: {
    country: "US",
  },
  locale: "en",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  owner: {
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
  },
  email: "customer@example.com",
};
```

### `components.CustomerTeamCreate`

```typescript
const value: components.CustomerTeamCreate = {
  externalId: "usr_1337",
  name: "John Doe",
  billingAddress: {
    country: "US",
  },
  locale: "en",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  owner: {
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
  },
  type: "team",
  email: "customer@example.com",
};
```

