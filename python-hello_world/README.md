## Shell Script to Run a Python Script

This project contains a Shell script that runs a Python script. The name of the Python script is stored in the environment variable `$PYFILE`.

## Files
- `0-run`: A Shell script that runs the Python script specified in the `$PYFILE` environment variable.
- `main.py`: A sample Python script that prints "Best School".

## Usage
1. Set the `PYFILE` environment variable to the name of your Python script:
   ```bash
   export PYFILE=main.py
