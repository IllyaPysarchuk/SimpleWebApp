let chart = new Chart()
let x = []
let y = []
let length = 0
let extremes = document.getElementById("extremes")



function  DestroyElements(){
    extremes.style.display = 'none'
    chart.destroy()
    x = []
    y = []
}
function  SearchStr(){
    DestroyElements()
    document.getElementById("Result").style.display='grid'
    let data = document.getElementById("text").value.split("")
    length = data.length
    let searched = document.getElementById("search").value
    let search = searched.split("")
    let count = 0
    for (let i = 0; i < data.length; i++) {
        if(data[i] === search[0] ){
            let temp = ""
            for (let j = 0; j < search.length; j++) {
                temp+= data[i+ j]
            }
            if(temp === searched)
                count++
        }
    }

    x.push(searched)
    y.push(count)
    DrawChart(x, y)
}

function  SearchChar(){
    DestroyElements()
    document.getElementById("Result").style.display='grid'
    let data = document.getElementById("text").value.split("")
    length = data.length
    console.log(length)
    let letters = []
    let countsLetters = []
    for (let i = 0; i < data.length; i++) {
        if(!letters.includes(data[i]))
            letters.push(data[i])
    }

    for (let i = 0; i < letters.length; i++) {
        let count = 0;
        for (let j = 0; j < data.length; j++) {
            if(letters[i] === data[j])
                count++
        }
        countsLetters.push(count)
    }
    x = letters
    y = countsLetters
    extremes.style.display = ''
    extremes.innerHTML = `P<sub>n min</sub> = ${Math.min.apply(null, y)/length}; `+
        `P<sub>n max</sub> = ${Math.max.apply(null, y)/length}; `

        DrawChart(x, y)
}

function DrawChart(x, y){

    let barColors = ["red", "green","blue","orange","brown","gray"];
    chart = new Chart("myChart", {
        type: "line",
        data: {
            labels: x,
            datasets: [{
                backgroundColor: barColors,
                data: y
            }]
        },
        options: {
            tooltip: {
                display:false,
                enabled: false
            },
            legend: {
                display:false
            },
            title: {
                display: false
            },
            subtitle: {
                display:false
            }
        }
    });
}

function ShowTable(){
    let htmlData = ''
    for (let i = 0; i < x.length; i++) {
        htmlData += '<tr>\n' +
            `      <th scope="row">${i + 1}</th>` +
            `      <td>${x[i]}</td>` +
            `      <td>${y[i]}</td>` +
            `      <td>${y[i]/length}</td>` +
            `    </tr>`
    }
  Swal.fire({
      title: 'Дані',
      html: '<table class="table table-bordered">\n' +
          '  <thead>\n' +
          '    <tr>\n' +
          '      <th scope="col">#</th>\n' +
          '      <th scope="col">Символ/Строка</th>\n' +
          '      <th scope="col">k<sub>i</sub></th>\n' +
          '      <th scope="col">P<sub>n</sub></th>\n' +
          '    </tr>\n' +
          '  </thead>\n' +
          '  <tbody>\n' +
            htmlData +
          '  </tbody>\n' +
          '</table>',
      confirmButtonText: 'Закрити'
  })
}


