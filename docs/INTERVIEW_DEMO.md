# Interview Demo

1. Run `cd web && python -m http.server 8000`.
2. Open `http://localhost:8000`.
3. Open **Predict**.
4. Upload `data/sample_ohlcv.csv` or a real stock CSV.
5. Confirm the detected `Close / Price` field.
6. Click **Train & Predict**.
7. Explain the chronological holdout and next-day target.
8. Open **Evaluation** to discuss MAE, RMSE, R² and direction accuracy.
9. Open the GitHub profile link in the footer.

For the Reliance file from NSE, point out that `Close` is the price column; a separate `Price` field is unnecessary.
