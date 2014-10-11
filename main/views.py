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
        'img': "http://mediad.publicbroadcasting.net/p/vpr/files/styles/placed_wide/public/201407/vpr-classical-hosts.jpg",
        'description': "Looking for a piece you heard on VPR Classical today, yesterday or last month? Find it here!",
        'twitter_text': "Looking for something you heard on VPR Classical? Try our playlist calendar!",
        'twitter_hashtag': "Classical"
    }

    return render_template('content.html',
        page_title=page_title,
        page_url=page_url,
        social=social)
