# Alumni Registration With Google Forms

Use this setup when you want alumni registrations to land in Google Sheets without Apps Script.

## 1. Create the Google Form

Create a Google Form with these questions:

- Full Name
- Gender
- Year of Completion
- Programme Studied
- Current Profession
- Current Location
- Phone Number
- Email Address
- Are you willing to mentor students?
- Are you willing to support school projects?
- Short Message

Link the form to a Google Sheet from the form's Responses tab.

## 2. Get the form response URL

Open the form in preview mode. The URL looks like this:

```text
https://docs.google.com/forms/d/e/FORM_ID/viewform
```

In `src/pages/Alumni.vue`, set `GOOGLE_FORM_ACTION` to:

```text
https://docs.google.com/forms/d/e/FORM_ID/formResponse
```

## 3. Get each entry ID

In Google Forms:

1. Click the three-dot menu.
2. Choose `Get pre-filled link`.
3. Enter sample text in every field.
4. Click `Get link`.
5. Copy the generated URL.

The URL contains values like:

```text
entry.123456789=Sample+Name&entry.987654321=2020
```

Match each `entry.*` value to the question you filled and replace the placeholders in `GOOGLE_FORM_FIELDS` inside `src/pages/Alumni.vue`.

For Gender specifically, set `GOOGLE_FORM_OPTIONAL_FIELDS.gender` in `src/pages/Alumni.vue` after you add Gender to the Google Form.

## 4. Test

Run the site locally, submit one alumni registration, then check the linked response Sheet.

```bash
npm run dev
```

If the page says the registration is not connected, one or more placeholders in `GOOGLE_FORM_ACTION` or `GOOGLE_FORM_FIELDS` still needs to be replaced.
