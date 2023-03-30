let data = [
    {
      title:"LP 4 Drivers",
      data:[
        {
          title:"Manual",
          size:"10.1",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/EVOO_Gaming_EG-LP4_EG-LP5_Manual_LOW_HM_02182020.pdf"
        },
        {
          title:"Audio Driver",
          size:"16.6",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/AUDIO/8710_UAD_WHQL_2019_0527_113706.7z"
        },
        {
          title:"Card Reader",
          size:"12.1",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/Card%20reader/RTS5306/RtsUer_10.0.18362.31248_W19H1_WHQL_20190426.zip"
        },
        {
          title:"Chipset",
          size:"3.23",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/Chipset/chipset-10.1.18019.8144-public-mup.zip"
        },
        {
          title:"Intel VGA",
          size:"353",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/Intel%20VGA/6911/win64.zip"
        },
        {
          title:"Intel Wlan",
          size:"492",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6//"
        }
      ]
    },
    {
      title:"LP 5 Drivers",
      data:[
        {
          title:"Manual",
          size:"16.3",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/EVOO_Gaming_EG-LP4_EG-LP5_Manual_LOW_HM_02182020.pdf"
        },
        {
          title:"Audio Driver",
          size:"10.1",
          link:"http://www.evooproducts.com/drivers/OP4%20Win10%20RS6/EVOO_Gaming_EG-LP4_EG-LP5_Manual_LOW_HM_02182020.pdf"
        },
        {
          title:"Card Reader",
          size:"12.2",
          link:"http://www.evooproducts.com/drivers/OP5%2019H1/Card%20reader/RtsUer_10.0.18362.31248_W19H1_WHQL_20190426.zip"
        },
        {
          title:"Chipset",
          size:"3.25",
          link:"http://www.evooproducts.com/drivers/OP5%2019H1/Chipset/chipset-10.1.18019.8144-public-mup.zip"
        },
        {
          title:"Intel VGA",
          size:"357",
          link:"http://www.evooproducts.com/drivers/OP5%2019H1/Intel%20VGA/6911/win64.zip"
        },
        {
          title:"Intel Wlan",
          size:"491",
          link:"http://www.evooproducts.com/drivers/OP5%2019H1/Intel%20Wlan/sthwfw5672_21.20.1.1g.zip"
        }
      ]
    },
    {
      title:"LP 6 Drivers",
      data:[
        {
          title:"Manual",
          size:"10.1",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/EVOO_Gaming_EG-LP6_Manual_LOW_HM_02182020.pdf"
        },
        {
          title:"Audio Driver",
          size:"16.7",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/AUDIO/8710_UAD_WHQL_2019_0527_113706.7z"
        },
        {
          title:"Card Reader",
          size:"12.0",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/Card%20reader/RtsUer_10.0.18362.31248_W19H1_WHQL_20190426.zip"
        },
        {
          title:"Chipset",
          size:"3.25",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/Chipset/chipset-10.1.18019.8144-public-mup.zip"
        },
        {
          title:"Intel VGA",
          size:"350",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/Intel%20VGA/6911/win64.zip"
        },
        {
          title:"Intel Wlan",
          size:"449",
          link:"http://www.evooproducts.com/drivers/OP6%2019H1/Intel%20Wlan/sthwfw5672_21.20.1.1g.zip"
        }
      ]
    }
]

let table = document.querySelector("#table-body")
let title = document.querySelector("#title")

function sort(e){
  if(e.id === "1"){
    table.innerHTML = generateTable(data[0].data)
    title.innerHTML = data[0].title
    window.location = "#drivers"
  }else if(e.id === "2"){
    table.innerHTML = generateTable(data[1].data)
    title.innerHTML = data[1].title
    window.location = "#drivers"
  }else{
    table.innerHTML = generateTable(data[2].data)
    title.innerHTML = data[2].title
    window.location = "#drivers"
  }
}
function generateTable(a)
{
    return a.map((c)=>(
      `<tr class="table-group-divider">
       <td>${c.title}</td>
       <td>${c.size} Mbs</td>
       <td><a href="${c.link}" class="table-download" download>Download</a></td>
     </tr>`
   )).join("")
}

window.onload = function(){
  table.innerHTML =  generateTable(data[0].data)
  title.innerHTML = data[0].title
  // console.log(htmlList);
}
