const vscode = require('vscode');

function activate(context) {
    console.log('Simple Timer activated!');
	
    let timerCommand = vscode.commands.registerCommand(
        'simple-timer.start',
        function() {
            // Показываем уведомление о старте
            vscode.window.showInformationMessage('⏱️ Таймер запущен...');

            // Запускаем таймер на 60 секунд
            let timeLeft = 60 * 30;
            let interval = setInterval(() => {
                timeLeft--;

                // Показывать уведомление каждые 10 минут
    			if (timeLeft > 0 && timeLeft % 600 === 0) {
        			let minutesLeft = Math.floor(timeLeft / 60);
        			vscode.window.showInformationMessage(`⏱️ Осталось ${minutesLeft} минут.`);
    			}

                // Когда время вышло
                if (timeLeft === 0) {
                    clearInterval(interval);
                    vscode.window.showInformationMessage('✅ 30 минут прошло!');
                }
            }, 1000);
        }
    );
    context.subscriptions.push(timerCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
