# Troubleshooting

## "Could not detect Date and Close/Price"

Rename or include a date column and one of:

- Close
- Adj Close
- Last
- Price

## "Not enough rows"

Use a longer daily history. At least 80 valid rows are recommended; 200+ is preferable.

## Blank prediction

Open the browser developer console and check the error. Also confirm the CSV is comma-separated and has numeric price values.

## Opening the HTML directly

Use a local server:

```bash
cd web
python -m http.server 8000
```

Then visit `http://localhost:8000`.
