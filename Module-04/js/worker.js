self.addEventListener('message', function (e) {
    var message = e.data[0] + ' to myself!';

    var x = e.data[0];
    var y = e.data[1];
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum = sum + i;
    }
    self.postMessage(sum);

    self.close();
});

