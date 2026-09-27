#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 8765 --bind 127.0.0.1
else
  printf '%s\n' 'Necesitas Python 3 para iniciar el servidor local.'
  exit 1
fi
