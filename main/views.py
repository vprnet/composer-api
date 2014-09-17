from main import app
from flask import render_template, request
from config import FREEZER_BASE_URL


@app.route('/')
def now_playing():
    page_title = 'Playing Now On VPR Classical'
    page_url = FREEZER_BASE_URL.rstrip('/') + request.path

    social = {
        'title': "",
        'subtitle': "",
        'img': "",
        'description': "",
        'twitter_text': "",
        'creator': "",
        'twitter_hashtag': ""
    }

    return render_template('base.html',
        page_title=page_title,
        page_url=page_url,
        social=social)
