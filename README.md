# Cybersource Secure Acceptance 

Unofficial Node.js implementation of Secure Acceptance Web/Mobile and Secure Acceptance Checkout API.

## Requirements

- Node.js.
- Secure Acceptance enabled on your CyberSource Merchant ID.
- Secure Acceptance profiles created and configured for each flavor you want to use (Web/Mobile and Checkout API)

## Installation

Install the package with:

```sh
npm install
```

## Configuration

The package needs to be configured with your own sandbox credentials.

Rename file `.env_example` to `.env`. Configure the following information in `.env`

```ini
CYBS_MID="<YOUR_MID>"

# HOSTED CHECKOUT / WEB MOBILE
SECURE_ACCEPTANCE_HOP_PROFILE_ID="<YOUR_SA_HOP_PROFILE_ID>"
SECURE_ACCEPTANCE_HOP_ACCESS_KEY="<YOUR_SA_HOP_ACCESS_KEY>"
SECURE_ACCEPTANCE_HOP_SECRET_KEY="<YOUR_SA_HOP_SECRET_KEY>"

# SILENT ORDER / CHECKOUT API
SECURE_ACCEPTANCE_SOP_PROFILE_ID="<YOUR_SA_SOP_PROFILE_ID>"
SECURE_ACCEPTANCE_SOP_ACCESS_KEY="<YOUR_SA_SOP_ACCESS_KEY>"
SECURE_ACCEPTANCE_SOP_SECRET_KEY="<YOUR_SA_SOP_SECRET_KEY>"
```

## Usage

To run the package from the terminal, use:

```bash
npm start
```

This will start the local server on port 4444. From here, navigate to `http://localhost:4444/` in your browser. 

If you want to change the port you run the local server on, edit the last line in ```./app.js```:

```js
app.listen(4444);
```

### Transaction Response Page

To use the `/receipt` view, ensure to set the correct URL as the Transaction Response Page in your Secure Acceptance Profile:

Payment Configuration > Secure Acceptance Settings > Edit Profile > Customer Response tab. 

If using port 4444, the URL will be: 
- `http://localhost:4444/secureAcceptanceWebMobile/receipt` for the Web/Mobile profile
- `http://localhost:4444/secureAcceptanceCheckout/receipt` for the Checkout API profile

### Transaction type

The `transaction_type` input field is a dropdown with several transaction types supported by the `/pay` endpoint. 

### Update payment token

If you choose to include `update_payment_token` in the transaction type, the `payment_token` field will be added to the form. You can enter the token directly in the input field, or set your own token value to prepopulate. To set your own value, edit the below line in these files:

- For Checkout API, edit: `\views\secureAcceptanceCheckout\index.ejs` (line 194)
- For Hosted Checkout, edit: `\views\secureAcceptanceWebMobile\index.ejs` (line 83)

The value to edit is:
```js
inputField.value = '';
```




