#!/usr/bin/python3

from urllib.parse import urlencode
from urllib.request import build_opener, HTTPCookieProcessor, Request

import feedparser
feedparser.PREFERRED_XML_PARSERS = []

# Fill login i password
#LOGIN = ''
#PASSWORD = ''

try:
    from config import *
except ImportError:
    pass

LOGIN_URL = 'https://forum.tcs.uj.edu.pl/login.php'
RSS_URL = 'https://forum.tcs.uj.edu.pl/rss_feed.php'

def tcs_get_raw_rss(rss_url, login_url, login, password):
    opener = build_opener(HTTPCookieProcessor)
    opener.open(Request(
                login_url,
                urlencode({
                    'username': login,
                    'password': password,
                    'redirect': '',
                    'login': 'Login',
                }).encode()
            )).read()

    data = opener.open(rss_url).read()

    opener.close()
    return data

if __name__ == '__main__':
    data = tcs_get_raw_rss(RSS_URL, LOGIN_URL, LOGIN, PASSWORD)

    print(data.decode())
