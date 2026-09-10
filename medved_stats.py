#!/usr/bin/env python3
"""Ежедневный отчёт о посещениях сайта medved-club.ru → Telegram."""

import urllib.request
import urllib.parse
import json
from datetime import datetime, timedelta

METRIKA_TOKEN = "y0__wgBEIXj258CGN2MQyCL-MzmFzCNxey9CGMa1nNEWbFrlU9-yoExPOe6jTN2"
COUNTER_ID = "109565621"
BOT_TOKEN = "8629336211:AAHcja0BoR6rj9-sYKk-HqYyw8Eq3s_kVSw"
CHAT_ID = "1031098727"  # Юля


def metrika_request(metrics, dimensions="", date1=None, date2=None, filters=""):
    today = datetime.now().strftime("%Y-%m-%d")
    date1 = date1 or today
    date2 = date2 or today
    params = {
        "ids": COUNTER_ID,
        "metrics": metrics,
        "date1": date1,
        "date2": date2,
        "limit": 10,
        "sort": f"-{metrics.split(',')[0]}",
    }
    if dimensions:
        params["dimensions"] = dimensions
    if filters:
        params["filters"] = filters

    url = "https://api-metrika.yandex.net/stat/v1/data?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Authorization": f"OAuth {METRIKA_TOKEN}"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())


def send_telegram(text):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    data = urllib.parse.urlencode({
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "HTML",
    }).encode()
    urllib.request.urlopen(url, data=data)


def make_report():
    today = datetime.now().strftime("%Y-%m-%d")
    yesterday = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")
    week_ago = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")

    # Основные метрики за вчера
    main = metrika_request(
        "ym:s:visits,ym:s:users,ym:s:pageviews,ym:s:bounceRate,ym:s:avgVisitDurationSeconds",
        date1=yesterday, date2=yesterday
    )
    totals = main.get("totals", [0, 0, 0, 0, 0])
    visits = int(totals[0]) if totals else 0
    users = int(totals[1]) if len(totals) > 1 else 0
    pageviews = int(totals[2]) if len(totals) > 2 else 0
    bounce = round(totals[3], 1) if len(totals) > 3 else 0
    duration = int(totals[4]) if len(totals) > 4 else 0
    duration_str = f"{duration // 60}:{duration % 60:02d}"

    # За неделю
    week = metrika_request(
        "ym:s:visits,ym:s:users",
        date1=week_ago, date2=yesterday
    )
    week_totals = week.get("totals", [0, 0])
    week_visits = int(week_totals[0]) if week_totals else 0
    week_users = int(week_totals[1]) if len(week_totals) > 1 else 0

    # Топ страниц за вчера
    pages = metrika_request(
        "ym:s:pageviews",
        dimensions="ym:s:startURL",
        date1=yesterday, date2=yesterday
    )
    top_pages = ""
    for row in pages.get("data", [])[:5]:
        page = row.get("dimensions", [{}])[0].get("name", "/") or "/"
        page = page.replace("https://medved-club.ru", "") or "/"
        pv = int(row.get("metrics", [0])[0])
        if pv > 0:
            top_pages += f"  {page} — {pv}\n"

    # Источники трафика
    sources = metrika_request(
        "ym:s:visits",
        dimensions="ym:s:trafficSource",
        date1=yesterday, date2=yesterday
    )
    src_lines = ""
    for row in sources.get("data", [])[:4]:
        src = row.get("dimensions", [{}])[0].get("name", "?")
        sv = int(row.get("metrics", [0])[0])
        src_lines += f"  {src} — {sv}\n"

    date_label = (datetime.now() - timedelta(days=1)).strftime("%d.%m.%Y")

    report = (
        f"📊 <b>medved-club.ru — {date_label}</b>\n\n"
        f"👥 Визиты: <b>{visits}</b>\n"
        f"🧑 Уникальные: <b>{users}</b>\n"
        f"📄 Просмотры: <b>{pageviews}</b>\n"
        f"↩️ Отказы: <b>{bounce}%</b>\n"
        f"⏱ Время на сайте: <b>{duration_str}</b>\n\n"
        f"📅 За 7 дней: <b>{week_visits}</b> визитов, <b>{week_users}</b> уникальных\n"
    )

    if top_pages:
        report += f"\n🔝 Топ страниц:\n{top_pages}"

    if src_lines:
        report += f"\n🚦 Источники:\n{src_lines}"

    return report


def make_weekly_report():
    today = datetime.now()
    week_ago = (today - timedelta(days=7)).strftime("%Y-%m-%d")
    yesterday = (today - timedelta(days=1)).strftime("%Y-%m-%d")

    data = metrika_request(
        "ym:s:visits,ym:s:users,ym:s:pageviews,ym:s:bounceRate",
        date1=week_ago, date2=yesterday
    )
    t = data.get("totals", [0, 0, 0, 0])
    visits = int(t[0]) if t else 0
    users = int(t[1]) if len(t) > 1 else 0
    pageviews = int(t[2]) if len(t) > 2 else 0
    bounce = round(t[3], 1) if len(t) > 3 else 0

    # Топ страниц за неделю
    pages = metrika_request(
        "ym:s:pageviews",
        dimensions="ym:s:startURL",
        date1=week_ago, date2=yesterday
    )
    top_pages = ""
    for row in pages.get("data", [])[:7]:
        page = row.get("dimensions", [{}])[0].get("name", "/") or "/"
        page = page.replace("https://medved-club.ru", "") or "/"
        pv = int(row.get("metrics", [0])[0])
        if pv > 0:
            top_pages += f"  {page} — {pv}\n"

    period = f"{(today - timedelta(days=7)).strftime('%d.%m')}–{(today - timedelta(days=1)).strftime('%d.%m.%Y')}"
    report = (
        f"📈 <b>medved-club.ru — Итоги недели {period}</b>\n\n"
        f"👥 Визиты: <b>{visits}</b>\n"
        f"🧑 Уникальные: <b>{users}</b>\n"
        f"📄 Просмотры: <b>{pageviews}</b>\n"
        f"↩️ Отказы: <b>{bounce}%</b>\n"
    )
    if top_pages:
        report += f"\n🔝 Топ страниц недели:\n{top_pages}"
    return report


if __name__ == "__main__":
    print("Запрашиваю данные Метрики...")
    today = datetime.now()
    yesterday = (today - timedelta(days=1)).strftime("%Y-%m-%d")

    # Проверка нулевого трафика — алерт
    check = metrika_request("ym:s:visits", date1=yesterday, date2=yesterday)
    visits_yesterday = int(check.get("totals", [0])[0])

    if visits_yesterday == 0:
        alert = (
            "⚠️ <b>medved-club.ru — АЛЕРТ</b>\n\n"
            f"Вчера ({(today - timedelta(days=1)).strftime('%d.%m.%Y')}) зафиксировано <b>0 визитов</b>.\n"
            "Проверьте доступность сайта."
        )
        send_telegram(alert)
        print("Алерт: 0 визитов!")
    else:
        # Ежедневный отчёт
        report = make_report()
        print(report)
        send_telegram(report)
        print("Ежедневный отчёт отправлен!")

    # Еженедельный отчёт по воскресеньям
    if today.weekday() == 6:
        weekly = make_weekly_report()
        print(weekly)
        send_telegram(weekly)
        print("Еженедельный отчёт отправлен!")
