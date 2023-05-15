from flask_mail import Message
from extensions import mail

"""
Functions for sending en email.
"""


async def send_async_email(msg):
    """
    Send email message asynchronously to user requesting a new password (password forgotten).
    Args:
        msg: msg body for email
    """
    await mail.send(msg)


def send_email(subject, sender, recipients, text_body, html_body):
    """
    Sends email to given recipients.
    Args:
        subject: email subject
        sender: email address of sender
        recipients: email addresses of recipients
        text_body: email as text
        html_body: email as html
    """
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = text_body
    msg.html = html_body
    send_async_email(msg)

