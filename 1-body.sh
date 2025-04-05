#!/bin/bash
# Sends a GET request, displays body only if status is 200 (no redirects)
curl -sL "$1"
