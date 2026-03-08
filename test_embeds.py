import urllib.request; import urllib.error;
ids = ['nMvLHi00y9A', 'aV7-q5Y1jPU', '9-6RxWnrQak', 'pi3DQQHvlno', 'mKONb6HjIEo', '6hC0W8urSXA', '8sVDc2K5nNg', 'yD9ZE6flqx0', 'WsMfWqNctAQ', 'wlq6lMINDZY']
for id in ids:
    try:
        urllib.request.urlopen('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+id+'&format=json')
        print(id, 'Embed Allowed')
    except urllib.error.HTTPError as e:
        print(id, 'Error:', e.code)
