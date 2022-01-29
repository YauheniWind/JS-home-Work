class StateMachine {

    state = [];

    // конструктор класса и свойства какие вы захотите сами, если они нужны
    add(cb, seconds) {  // добавляет новый таймер
        this.cb = cb
        this.seconds = seconds * 1000
        this.state.push({ cb: this.cb, seconds: this.seconds })
        return this
    }

    run() {  // запускает таймеры
        this.state.forEach((obj) => {
            this.timer = setTimeout(obj.cb, obj.seconds)
            obj.timer = this.timer
        })
    }

    stopAll() { // останавливает все таймеры и прекращает выполнение
        this.state.forEach((obj) => {
            clearTimeout(obj.timer)
        })
    }

}

const stateMachine = new StateMachine()

stateMachine.add(() => { // создаем новый таймер, который при вызове run выполнится через одну секунду 
    console.log('Приветствую вас через секунду')
}, 1);
stateMachine.add(() => {
    // создаем новый таймер, который при вызове run выполнится через две секунды
    console.log('Передаю привет через две секунды')
    stateMachine.stopAll()
}, 2);
stateMachine.add(() => {
    // создаем новый таймер, который при вызове run не выполнится через три секунды, но так в предыдущем таймере 
    stateMachine.stopAll()
    console.log('Это не должно вызваться никогда!')
}, 3)

stateMachine.run()
