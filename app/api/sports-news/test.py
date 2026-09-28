import pandas as pd
from typing import Optional

def fetch_stock_data(ticker: str, start_date: str, end_date: str) -> Optional[pd.DataFrame]:
    """
    Fetch historical stock data for a given ticker from an external source.

    Args:
        ticker (str): The stock ticker symbol.
        start_date (str): The start date of the data range in 'YYYY-MM-DD' format.
        end_date (str): The end date of the data range in 'YYYY-MM-DD' format.

    Returns:
        Optional[pd.DataFrame]: A DataFrame containing the historical stock data, or None if fetching fails.
    """
    try:
        # This is a placeholder for the actual data fetching logic
        # Replace with an actual API call to fetch stock data
        url = f"https://api.example.com/stock/{ticker}?start={start_date}&end={end_date}"
        response = pd.read_json(url)
        return response
    except Exception as e:
        print(f"Failed to fetch data for {ticker}: {e}")
        return None

def calculate_moving_average(data: pd.DataFrame, window: int) -> pd.Series:
    """
    Calculate the moving average of a given DataFrame column.

    Args:
        data (pd.DataFrame): The DataFrame containing the stock data.
        window (int): The window size for the moving average.

    Returns:
        pd.Series: A Series containing the moving average values.
    """
    return data['Close'].rolling(window=window).mean()

def calculate_std_dev(data: pd.DataFrame, window: int) -> pd.Series:
    """
    Calculate the standard deviation of a given DataFrame column over a specified window size.

    Args:
        data (pd.DataFrame): The DataFrame containing the stock data.
        window (int): The window size for the standard deviation calculation.

    Returns:
        pd.Series: A Series containing the standard deviation values.
    """
    return data['Close'].rolling(window=window).std()

def identify_pullbacks(data: pd.DataFrame, ma_window: int, std_dev_window: int) -> pd.Series:
    """
    Identify pullback points in the stock price based on a moving average and standard deviations.

    Args:
        data (pd.DataFrame): The DataFrame containing the stock data.
        ma_window (int): The window size for the moving average.
        std_dev_window (int): The window size for the standard deviation calculation.

    Returns:
        pd.Series: A Series with True indicating a pullback point and False otherwise.
    """
    ma = calculate_moving_average(data, ma_window)
    std_dev = calculate_std_dev(data, std_dev_window)
    pullbacks = data['Close'] < (ma - 2 * std_dev)
    return pullbacks

def backtest_strategy(data: pd.DataFrame, ma_window: int, std_dev_window: int) -> float:
    """
    Perform a simple backtest of the pullback strategy.

    Args:
        data (pd.DataFrame): The DataFrame containing the stock data.
        ma_window (int): The window size for the moving average.
        std_dev_window (int): The window size for the standard deviation calculation.

    Returns:
        float: The Sharpe ratio of the backtest, or None if there are not enough data points.
    """
    pullbacks = identify_pullbacks(data, ma_window, std_dev_window)
    data['Position'] = 0
    data.loc[pullbacks & (data['Close'].shift(1) >= data['Close']), 'Position'] = -1

    returns = data['Close'].pct_change()
    strategy_returns = returns[data['Position'] != 0].dropna()
    risk_free_rate = 0.02
    excess_returns = strategy_returns - risk_free_rate

    if len(excess_returns) > 1:
        sharpe_ratio = excess_returns.mean() / excess_returns.std()
        return sharpe_ratio
    else:
        return None

# Example usage
ticker = "AAPL"
start_date = "2020-01-01"
end_date = "2023-01-01"
data = fetch_stock_data(ticker, start_date, end_date)
if data is not None:
    sharpe_ratio = backtest_strategy(data, ma_window=20, std_dev_window=20)
    if sharpe_ratio is not None:
        print(f"Sharpe Ratio: {sharpe_ratio}")
    else:
        print("Not enough data points for backtesting.")
else:
    print("Failed to fetch stock data.")