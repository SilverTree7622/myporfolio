axisj.promise = function () {

    // 프라미스
    var myClass = function () {
        this.busy = false;
        this.queue = [];


        this.then = function (fn) {
            this.queue.push(fn);
            this.exec();
            return this;
        };

        // 함수 실행자 (큐가 남아 있으면 실행합니다.)
        this.exec = function (data) {
            if (this.busy) return this; // 바쁘니까 다음에 다시 봅시다.
            var Q = this.queue.shift(),
                self = this;

            if (Q) {
                this.busy = true;

                try {
                    // 큐에 함수를 실행 인자는 ok, err, data 로
                    Q(
                        function (a) {
                            self.busy = false;
                            self.exec(a);
                        },
                        function (e) {
                            self._catch(e);
                        },
                        data
                    );
                }
                catch (e) {
                    this._catch(e);
                }
            } else {
                this.busy = false;
            }
        };

        // 에러가 발생되면.. 호출 하려고 둠.
        this.catch = function (fn) {
            this._catch = fn;
        };
    };

    // 클래스 인스턴스를 반환합니다.
    return new myClass();
}
