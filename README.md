# Stock Price Prediction

An end-to-end **stock price forecasting portfolio project** using historical OHLCV data.

This repository contains:

1. **Jupyter Notebook** — Python/pandas/scikit-learn research workflow.
2. **Browser Web App** — vanilla HTML/CSS/JavaScript application that lets an interviewer upload **any compatible OHLCV CSV, train a model in the browser, evaluate it, and predict the next trading day's closing price**.

## The important fix

The earlier web app only displayed the uploaded CSV. It did **not** train a forecasting model.

This version performs the actual prediction workflow in JavaScript:

```text
Upload CSV
   ↓
Detect Date / Open / High / Low / Close / Volume
   ↓
Clean + sort
   ↓
Engineer lag + return + moving-average + volatility features
   ↓
Chronological 80/20 split
   ↓
Train Ridge Regression in the browser
   ↓
Evaluate MAE / RMSE / R² / Direction Accuracy
   ↓
Retrain on all usable history
   ↓
Predict the next trading day's Close
```

## About your Reliance CSV

Your screenshot shows columns including:

```text
Date
Symbol
Series
Prev Close
Open
High
Low
Last
Close
VWAP
Volume
Turnover
Trades
...
```

There is no column literally named `Price`, but **that is completely fine**.

`Close` is a price. The application automatically maps:

```text
Close → target price
```

If `Close` is absent, the application can fall back to common alternatives such as:

```text
Adj Close
Last
Price
Closing Price
```

Only `Date + Close/Price` are required. Open, High, Low and Volume improve the feature set when available.

## What the web app can do

- Upload a CSV
- Automatically detect OHLCV columns
- Validate and clean rows
- Show dataset preview
- Train a real regression model
- Show holdout metrics
- Predict next trading day's closing price
- Show predicted UP/DOWN direction
- Display recent price chart
- Work with Reliance, AAPL, or another compatible stock dataset
- Work without an API key
- Work without a backend
- Keep the selected CSV in the browser
- Link directly to the author's GitHub profile

## Model

The web app implements **Ridge Regression** directly in JavaScript.

Features:

- Lag 1 close
- Lag 2 close
- Lag 3 close
- Lag 5 close
- 1-day return
- 5-day return
- SMA 5 gap
- SMA 10 gap
- SMA 20 gap
- 10-day volatility
- High-low range
- Open-close movement
- Volume change

The final target is:

> **Next trading day's closing price**

The model first uses the final 20% as an unseen chronological test set. After evaluation, it is retrained on all usable historical samples and used to forecast the next trading day.

## Run

From the repository root:

```bash
cd web
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

A local HTTP server is recommended because the application uses JavaScript modules.

## Quick interviewer demo

1. Open the web app.
2. Click **Predict**.
3. Upload the Reliance CSV.
4. Confirm that `Close` is detected as **Close / Price**.
5. Click **Train & Predict**.
6. The app will show:
   - latest close
   - predicted next close
   - expected direction
   - MAE
   - RMSE
   - R²
   - directional accuracy
   - recent price chart

A synthetic `data/sample_ohlcv.csv` is included so the interviewer can test the application immediately. It is clearly labeled **synthetic demo data**, not real market data.

## Notebook

`Stock_Price_Prediction.ipynb` contains the Python/scikit-learn version of the workflow.

The notebook and web app intentionally remain separate:

- **Notebook:** Python + pandas + scikit-learn research
- **Web app:** HTML + CSS + JavaScript demonstration

## Disclaimer

This project is for educational and portfolio purposes only. Historical model performance does not guarantee future market performance and the predictions are not financial advice.
