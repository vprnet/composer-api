from main import app
from flask import render_template, request
from config import FREEZER_BASE_URL


@app.route('/now-playing')
def now_playing():
    page_title = 'Playing Now On VPR Classical'
    page_url = FREEZER_BASE_URL.rstrip('/') + request.path

    social = False

    return render_template('now-playing.html',
        page_title=page_title,
        page_url=page_url,
        social=social)


@app.route('/playlist-calendar')
def playlist_calendar():
    page_title = 'VPR Classical Playlist Calendar'
    page_url = FREEZER_BASE_URL.rstrip('/') + request.path

    social = {
        'title': "Playlist Calendar",
        'subtitle': "",
        'img': "http://www.vpr.net/apps/traces/static/img/vpr-traces-social-image.jpg",
        'description': "Drug addiction affects many in the Vermont community. Traces is an attempt to catalog the memories and feelings of Vermonters affected by addiction, and an exploration of the deep and subtle ways that addiction leaves its mark.",
        'twitter_text': "VPR is exploring the deep and subtle ways that drug addiction in Vermont leaves its mark.",
        'twitter_hashtag': "VT, VtTraces"
    }

    return render_template('content.html',
        page_title=page_title,
        page_url=page_url,
        social=social)
