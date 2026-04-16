import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Сохраняет ответ гостя на свадебное приглашение."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    if event.get("httpMethod") == "POST":
        body = json.loads(event.get("body") or "{}")
        name = body.get("name", "").strip()
        attending = body.get("attending")
        guests = int(body.get("guests", 0))
        overnight = body.get("overnight", "no") == "yes"
        with_partner = bool(body.get("with_partner", False))

        if not name or attending not in ("yes", "no"):
            return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "Неверные данные"})}

        conn = psycopg2.connect(os.environ["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO rsvp (name, attending, guests, overnight, with_partner) VALUES (%s, %s, %s, %s, %s)",
            (name, attending == "yes", guests, overnight, with_partner)
        )
        conn.commit()
        cur.close()
        conn.close()

        return {"statusCode": 200, "headers": cors, "body": json.dumps({"ok": True})}

    if event.get("httpMethod") == "GET":
        conn = psycopg2.connect(os.environ["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute("SELECT name, attending, guests, overnight, with_partner, created_at FROM rsvp ORDER BY created_at DESC")
        rows = [{"name": r[0], "attending": r[1], "guests": r[2], "overnight": r[3], "with_partner": r[4], "created_at": str(r[5])} for r in cur.fetchall()]
        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": cors, "body": json.dumps(rows, ensure_ascii=False)}

    return {"statusCode": 405, "headers": cors, "body": ""}