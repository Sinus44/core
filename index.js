/*

2. нагпузка процессора
3. норм бот
3.1 оповещения
3.2 стиль бота
3.3 добавление и удаление задач автозапуска
4. автозапуск

*/

// VK ----------------------------------------------
var { VK } = require("vk-io");
var vk = new VK({token:"token"});
var exec = require("child_process").exec
var request = require("request")
var https = require("https")
var startDate = new Date()

/*
vk.updates.hear(/^Статус/i,msg=>{
	execute('getTemp.bat', function(data) {
		request("http://sinus44.000webhostapp.com/ping", (err,response, body) => {
			msg.send(
				`Дата запуска: ${startDate.getDate()+"-"+(startDate.getMonth()+1)+"-"+startDate.getFullYear()+" "+startDate.getHours()+":"+startDate.getMinutes()},
				Температура: ${Number(data)}
				IP: ${JSON.parse(body).ip}`
			)
			console.log("Написали")
		})
	})
})
*/

function Request(url) {
  return new Promise(function (resolve, reject) {
    request(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  });
}

function Execute(command, callback) {
  return new Promise(function (resolve, reject) {
    exec(command, function(error, res, stderr){
      if (!error && !stderr) {
        resolve(res);
      } else {
        reject(error);
      }
    });
  });
}


async function GET(host,content) {
	let options = {
  		url: host,
  		port: 443,
  		path: '/todos',
  		method: 'GET',
	}
}

//const req = https.request(options
//}
vk.updates.hear(/^Статус/i,async (msg)=>{
	let ip = await Request(`http://sinus44.000webhostapp.com/ping`)
	let temp = await Execute(`getTemp.bat`)
	let chrome = await Execute(`findProcess.bat chrome.exe`)
	msg.send(
`Дата запуска: ${startDate.getDate()+"-"+(startDate.getMonth()+1)+"-"+startDate.getFullYear()+" "+startDate.getHours()+":"+startDate.getMinutes()},
Температура: ${Number(temp)}
IP: ${JSON.parse(ip).ip}
Chrome: ${Boolean(Number(chrome))?"X":"V"}`
	)
})

//vk.updates.start();
//getStatus()
//console.log("Get temp..")
//getTemp()
//condition = "OK"

//getIp()


vk.updates.start();
