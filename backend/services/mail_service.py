from threading import Thread
from flask_mail import Message
from werkzeug.exceptions import InternalServerError
from extensions import mail


async def send_async_email(msg):
    await mail.send(msg)


def send_email(subject, sender, recipients, text_body, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = text_body
    msg.html = html_body
    send_async_email(msg)

