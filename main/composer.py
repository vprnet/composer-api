#!/usr/local/bin/python2.7

import requests
import arrow
import pprint
from config import COMPOSER_UCS as UCS

TZ = 'US/Eastern'
today = arrow.utcnow().to(TZ)
last_week = today.replace(days=-7).format("YYYY-MM-DD")
today = today.format("YYYY-MM-DD")

API_BASE = 'https://api.composer.nprstations.org/v1/widget/%s/' % UCS

pp = pprint.PrettyPrinter(indent=2)


def now_playing(format='json'):
    """Returns the song now playing, if available. If not available, returns
    the most recent song played.
    Query: https://api.composer.nprstations.org/v1/widget/UCS/now?format=json"""

    url = "%snow?format=%s" % (API_BASE, format)
    print url
    r = requests.get(url)
    return r.json()


def write_response(response):
    with open("main/response.html", "w+") as f:
        f.write(response)


def test_now_playing():
    response = now_playing()
    try:
        program = response['onNow']['program']['name']
        song = response['onNow']['song']
        track_name = song['trackName']
        composer = song['composerName']
        start_time = song['_start']
        duration = song['_duration']
        up_next = response['nextUp'][0]['program']['name']

        print "\nOn Now: %s" % program
        print "%s by %s" % (track_name, composer)
        print "Start time: %s Duration: %s" % (start_time, duration)
        print "\nUp Next: %s\n" % up_next
    except KeyError:
        pp.pprint(response)


def programs_for_day(date=today, format='json'):
    """Returns a list of the day's programs
    Query: https://api.composer.nprstations.org/v1/widget/UCS/day?
        date=2014-09-10&format=json"""

    url = "%sday?date=%s&format=%s" % (API_BASE, date, format)
    r = requests.get(url)
    return r.json()


def test_programs_for_day():
    response = programs_for_day()['onToday']
    for program in response:
        name = program['program']['name']
        start_time = program['start_time']
        end_time = program['end_time']
        print name, start_time, end_time


def programs_for_week(date1=today, date2=last_week, format="html"):
    """Returns an HTML table of the weekly program schedule
    Query: https://api.composer.nprstations.org/v1/widget/UCS/week?
        date=2014-09-03,2014-09-10&format=html"""
    url = "%sweek?date=%s,%s&format=%s" % (API_BASE, date2, date1, format)
    r = requests.get(url)
    return r.text

test_now_playing()
