#!/bin/bash
# Скрипт для проверки структуры директорий на Timeweb

echo "=== Домашняя директория ==="
ls -la ~/

echo -e "\n=== Проверка domains ==="
if [ -d ~/domains ]; then
  ls -la ~/domains/
  if [ -d ~/domains/fitness-together.ru ]; then
    echo -e "\n=== Структура fitness-together.ru ==="
    ls -la ~/domains/fitness-together.ru/
  fi
fi

echo -e "\n=== Проверка www ==="
if [ -d ~/www ]; then
  ls -la ~/www/
fi

echo -e "\n=== Проверка httpdocs ==="
if [ -d ~/httpdocs ]; then
  ls -la ~/httpdocs/
fi

echo -e "\n=== Текущий public_html ==="
ls -la ~/public_html/
