var test;
(function () {
    var httpRequest,
        date = new Date(),
        launchAudio = document.getElementById('audio-player'),
        zeroPaddedNumber = function(n) {
            if (n < 10) {
                n = '0' + n;
            }
            return n;
        },
        query = function(d) {
            // concatenate API call with URL string
            if (typeof d === 'undefined') {
                if (window.location.search.indexOf('?') !== (-1)) {
                    // d is passed to API call; date is update as side effect
                    d = window.location.search.split('=')[1];

                    var dateArray = d.split('-'),
                        year = dateArray[0],
                        month = dateArray[1] - 1,
                        day = dateArray[2];

                    date = new Date(year, month, day);

                } else {
                    d = getDateString(new Date());
                }
            }
            return 'https://api.composer.nprstations.org/v1/widget/518028fee1c810b152ff9766/day?format=json&date=' + d;
        },
        getDateString = function(d) {
            // take a Date object, convert to API friendly string
            dateString = d.getFullYear() + '-' + zeroPaddedNumber(d.getMonth() + 1) + '-' + zeroPaddedNumber(d.getDate());
            return dateString;
        },
        makeHumanDate = function(d) {
            // take a Date object, convert to human readable form
            var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
            return week[d.getDay()] + ', ' + month[d.getMonth()] + ' ' + d.getDate();
        },
        callComposer = function(eventHandler) {
            if (window.XMLHttpRequest) {
                httpRequest = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                try {
                    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
                }
                catch (e) {
                    try {
                        httpRequest = new activeXObject("Microsoft.XMLHTTP");
                    }
                    catch (e) {
                        console.log("Error making httpRequest");
                    }
                }
            }

            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                    eventHandler();
                }
            };
            sendRequest();
        },
        sendRequest = function(d) {
            httpRequest.open('GET', query(d));
            httpRequest.send();
        },
        convertTime = function(timestamp) {
            // takes API timestamp and converts to readable form
            var hour = parseInt(timestamp.split(':')[0], 10),
                min = timestamp.split(':')[1],
                ampm = "AM";

            if (hour >= 12) {
                hour -= 12;
                ampm = "PM";
            }

            if (hour === 0) {
                hour = "12";
            }

            return hour.toString() + ":" + min + " " + ampm;
        },

        Program = function(programObject) {
            this.name = programObject.program.name;
            this.id = this.name.replace(/\s+/g, '-');
            this.start = convertTime(programObject.start_time);
            this.am = (this.start.indexOf('AM') !== -1);
            this.end = convertTime(programObject.end_time);
            this.link = programObject.program.program_link;
            this.date = programObject.date;
            this.future = function() {
                var datestamp = programObject.date.split('-'),
                    h = programObject.start_time.split(':')[0],
                    y = datestamp[0],
                    m = datestamp[1] - 1,
                    d = datestamp[2],
                    date = new Date(y, m, d, h);

                return date > new Date();
            };
            this.playlist = function() {
                var playlist = [],
                    songs = programObject.playlist;

                if (songs) {
                    for (var i=0; i<songs.length; i++) {
                        playlist.push(new Song(songs[i]));
                    }
                } else {
                    playlist = false;
                }
                return playlist;
            };
        },
        Song = function(songObject) {
            this.trackName = songObject.trackName;
            this.composerName = songObject.composerName;
            this.conductor = songObject.conductor;
            this.startTime = convertTime(songObject._start_time.split(' ')[1]);
            this.link = songObject.buy.arkiv;
            this.ensemble = songObject.artistName.split(';')[0];
            this.soloists = function() {
                var artists = songObject.artistName.split(';');
                artists.shift();
                return artists;
            };
            this.copyright = songObject.copyright;
            this.catalogNumber = songObject.catalogNumber;
        },
        dailySchedule = function(data) {
            var programs = [];
            for (var i=0; i<data.length; i++) {
                programs.push(new Program(data[i]));
            }
            return programs;
        },
        picker = new Pikaday({
            field: document.getElementById('datepicker'),
            maxDate: new Date(),
            position: "bottom left",
            onSelect: function() {
                var d;
                date = this.getDate();
                d = getDateString(date);
                sendRequest(d);
                History.pushState({'date': d, 'stamp': date},
                    "VPR Classical Playlist Calendar" ,
                    window.location.pathname + "?date=" + d);
            }
        }),
        updateTemplate = function() {
            var response = JSON.parse(httpRequest.responseText).onToday,
                content = {'dailySchedule': dailySchedule(response),
                    'dateString': makeHumanDate(date)},
                html = Handlebars.templates.playlistCalendar(content);

            document.getElementById('calendar').innerHTML = html;
        };

    callComposer(function() {
        updateTemplate();
    });

    History.Adapter.bind(window, 'statechange', function() {
        var state = History.getState(),
            d = state.data.date,
            dateArray,
            year,
            month,
            day;

        if (typeof d !== 'undefined') {
            dateArray = d.split('-');
            year = dateArray[0];
            month = dateArray[1] - 1;
            day = dateArray[2];
            date = new Date(year, month, day);
        } else {
            date = new Date();
        }

        sendRequest(d);
    });

    $('#audio-player').on('click', function(e) {
        window.open($(this).attr("href"), "audioPlayer", "resizable = 0, status = 0, toolbar = 0, location = 0, menubar = 0, directories = 0, scrollbars = 1, width = 800, height = 600");
        return false;
    });


})();
