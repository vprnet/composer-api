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

    social = False

    return render_template('content.html',
        page_title=page_title,
        page_url=page_url,
        social=social)
