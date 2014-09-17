(function() {
    var httpRequest,
        programOnNow,
        programUpNext,
        trackOnNow,
        time,
        url = function() {
            time = new Date().getTime();
            return 'https://api.composer.nprstations.org/v1/widget/518028fee1c810b152ff9766/now?format=json&' + time;
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
                    catch (e) {}
                }
            }

            console.log("Things are happening");

            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                    eventHandler();
                }
        };

        httpRequest.open('GET', url());
        httpRequest.send();
    },

    createDict = function(data) {
        programOnNow = {
            'name': data.onNow.program.name,
            'start': convertTime(data.onNow.start_time),
            'end': convertTime(data.onNow.end_time),
            'link': data.onNow.program.program_link
        };

        programUpNext = {
            'name': data.nextUp[0].program.name,
            'start': convertTime(data.nextUp[0].start_time),
            'end': convertTime(data.nextUp[0].end_time),
            'link': data.nextUp[0].program.program_link
        };

        if (typeof data.onNow.song !== 'undefined') {
            trackOnNow = {
                'name': data.onNow.song.trackName,
                'composer': data.onNow.song.composerName,
                'start': convertTime(data.onNow.song._start)
            };
        }

        return {
            'programOnNow': programOnNow,
            'trackOnNow': trackOnNow,
            'programUpNext': programUpNext
        };
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

    updateTemplate = function() {
        data = JSON.parse(httpRequest.responseText);
        templateContext = createDict(data);

        html = Handlebars.templates.playingNow(templateContext);

        document.getElementById('playing-now').innerHTML = html;
    };

    window.setInterval(callComposer(url, updateTemplate), 60 * 1000);

})();

