(function () {
    var httpRequest,
        zeroPaddedNumber = function(n) {
            if (n < 10) {
                n = '0' + n;
            }
            return n;
        },
        url = function(date) {
            if (typeof date === 'undefined') {
                date = new Date();
            }

            dateString = date.getFullYear() + '-' + zeroPaddedNumber(date.getMonth() + 1) + '-' + zeroPaddedNumber(date.getDate());
            return 'https://api.composer.nprstations.org/v1/widget/518028fee1c810b152ff9766/day?format=json&date=' + dateString;
        },
        callComposer = function(url, eventHandler) {
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
        sendRequest = function(date) {
            httpRequest.open('GET', url(date));
            httpRequest.send();
        },
        convertTime = function(timestamp) {
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
            this.start = convertTime(programObject.start_time);
            this.end = convertTime(programObject.end_time);
            this.link = programObject.program.program_link;
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
            this.startTime = convertTime(songObject._start_time.split(' ')[1]);
            this.link = songObject.buy.arkiv;
            console.log(songObject._start_time);
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
            onSelect: function() {
                sendRequest(this.getDate());
            }
        }),
        updateTemplate = function() {
            var response = JSON.parse(httpRequest.responseText).onToday,
                content = {'dailySchedule': dailySchedule(response)},
                html = Handlebars.templates.playlistCalendar(content);

            document.getElementById('calendar').innerHTML = html;
        };


    callComposer(url, function() {
        updateTemplate();
    });
})();
